import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileBar } from "../components/ProfileBar/ProfileBar";
import { type Todo, type Todos } from "../types.d";
import { ToDoList } from "../components/ToDoLlist/ToDolist";

const MockTodos: Todos = [
    {
        id: 1,
        status: "Completed",
        description: "Nothing"
    },
    {
        id: 2,
        status: "Pending",
        description: "All"
    },
]

export const ToDo : React.FC = (): JSX.Element => {
    const { name } = useParams();
    const [ todoStatusFilter, setTodoStatusFilter] = useState<"Completed" | "Pending" | "All">("All")
    const [ todos, setTodos] = useState(MockTodos)
    const [ filteredTodos, setFilteredTodos] = useState<Todos>(todos)

    const toggleTodo = (todo: Todo) => {
        const item = {...todo}
        if(item.status === "Completed") item.status = "Pending"
        else item.status = "Completed"

        const newTodos =  todos.map(todoItem => {
            if(todoItem.id === item.id) return item
            else return todoItem
        })

        setTodos(newTodos)
    }

    const eraseTodo = (todo: Todo) => {
        let i: number;
        todos.forEach((item,index) => {
            item.id === todo.id ? i = index : null
        })

        const newTodos = [...todos]
        newTodos.splice(i!,1)

        setTodos(newTodos)
    }

    const addTodo = (todo: string) => {
        setTodos(prevState => {
            return [...prevState].concat({
                id: prevState[prevState.length-1].id+1,
                status: "Pending",
                description: todo
            })
        })
    }

    useEffect(() => {
        if(todoStatusFilter === "All") return setFilteredTodos(todos)
        const filtered = todos.filter((todo) => todo.status === todoStatusFilter)
        setFilteredTodos(filtered)
    },[todoStatusFilter, todos])

    return(
        <div className="flex w-[100vw] h-[100vh]">
            <ProfileBar username={name!}  todos={todos} todoStatusFilter={todoStatusFilter} setTodoStatusFilter={setTodoStatusFilter}/>
            <div className="flex basis-5/6 bg-[#CED6D6] h-[100vh] justify-around">
                <ToDoList todos={filteredTodos} addTodo={addTodo} toggleTodo={toggleTodo} eraseTodo={eraseTodo}/> 
            </div>
        </div>
    )
}