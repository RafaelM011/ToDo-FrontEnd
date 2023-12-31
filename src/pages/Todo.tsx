import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileBar } from "../components/ProfileBar/ProfileBar";
import { type Todo } from "../types.d";
import { ToDoList } from "../components/ToDoLlist/ToDolist";
import menuImg from "../assets/menu.png"

export const ToDo : React.FC = (): JSX.Element => {
    const { username } = useParams()
    const [ hidden, setHidden] = useState("hidden")
    const [ todoStatusFilter, setTodoStatusFilter] = useState<"Completed" | "Pending" | "All">("All")
    const [ todos, setTodos] = useState<Todo[]>([])
    const [ filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)
    
    useEffect(() => {
        fetch(`http://127.0.0.1:4000/todos/${username}`)
        .then( res => res.json())
        .then( data => setTodos(data))
    },[])

    useEffect(() => {
        if(todoStatusFilter === "All") return setFilteredTodos(todos)
        const filtered = todos.filter((todo) => todo.status === todoStatusFilter)
        setFilteredTodos(filtered)
    },[todoStatusFilter, todos])

    const toggleTodo = (todo: Todo) => {
        const newStatus = todo.status === "Pending" ? "Completed" : "Pending";

        fetch(`http://127.0.0.1:4000/todos/${username}/toggletodo`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: todo.id,
                status: newStatus
            })
        })
        .then( res => res.json())
        .then( data => setTodos(data))
    }

    const eraseTodo = (todo: Todo) => {
        fetch(`http://127.0.0.1:4000/todos/${username}/deltodo`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: todo.id})
        })
        .then( res => res.json())
        .then( data => setTodos(data))
    }

    const addTodo = (todo: string) => {
        fetch(`http://127.0.0.1:4000/todos/${username}/addtodo`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({description: todo})
        })
        .then( res => res.json())
        .then( data => setTodos(data))
    }


    return(
        <div className="flex flex-row max-[940px]:flex-col w-[100vw] h-[100vh]">
            <div className={`absolute top-2 left-2 z-20 min-[941px]:hidden`}>
                <img src={menuImg} alt="menuImg" onClick={() => setHidden(prev => prev === "hidden" ? "block" : "hidden")}/>
            </div>
            <div className={`${hidden} bg-[#CED6D6] px-4 py-10 flex flex-col`}>
                <div className="flex justify-center">
                    <h1 className="text-center text-xl font-bold"> {username} </h1>
                    <button className="font-bold rounded-full shadow-[0px_0px_4px_4px_rgba(0,0,0,0.3)] px-4 ml-4"> Sign Out </button>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col gap-2">
                        <button className="text-left text-md font-medium border-black border-b-2 border-r-2 rounded-full px-4" onClick={() => setTodoStatusFilter("All")}> All </button>
                        <button className="text-left text-md font-medium border-black border-b-2 border-r-2 rounded-full px-4" onClick={() => setTodoStatusFilter("Completed")}> Completed </button>
                        <button className="text-left text-md font-medium border-black border-b-2 border-r-2 rounded-full px-4" onClick={() => setTodoStatusFilter("Pending")}> Pending </button>
                    </div>
                </div>
            </div>
            <ProfileBar username={username!}  todos={todos} todoStatusFilter={todoStatusFilter} setTodoStatusFilter={setTodoStatusFilter}/>
            <div className="flex grow bg-[#CED6D6] h-[100vh] justify-around">
                <ToDoList todos={filteredTodos} addTodo={addTodo} toggleTodo={toggleTodo} eraseTodo={eraseTodo}/> 
            </div>
        </div>
    )
}