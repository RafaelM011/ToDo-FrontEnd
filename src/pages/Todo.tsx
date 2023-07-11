import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileBar } from "../components/ProfileBar/ProfileBar";
import { type Todos } from "../types.d";
import { ToDoList } from "../components/ToDoLlist/ToDolist";
import { FilteredTodos } from "../components/FilteredTodos/FilteredTodos";

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
    const [ todoStatusFilter, setTodoStatusFilter] = useState<"Completed" | "Pending">("Pending")
    const [ todos, setTodos] = useState(MockTodos)
    const [ filteredTodos, setFilteredTodos] = useState<Todos>(todos)

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
        const filtered = todos.filter((todo) => todo.status === todoStatusFilter)
        setFilteredTodos(filtered)
    },[todoStatusFilter, todos])

    return(
        <div className="flex">
            <ProfileBar username={name!}  todos={todos} todoStatusFilter={todoStatusFilter} setTodoStatusFilter={setTodoStatusFilter}/>
            <div className="flex">
                <ToDoList todos={todos} addTodo={addTodo}/> 
                <FilteredTodos todos={filteredTodos}/>                
            </div>
        </div>
    )
}