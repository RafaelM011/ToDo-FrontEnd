import { useState } from "react"
import { useParams } from "react-router-dom"
import { ProfileBar } from "../components/ProfileBar/ProfileBar";
import { type Todos } from "../types.d";
import { ToDoList } from "../components/ToDoLlist/ToDolist";

const MockTodos: Todos = [
    {
        status: "Completed",
        description: "Nothing"
    },
    {
        status: "Pending",
        description: "All"
    },
]

export const ToDo : React.FC = (): JSX.Element => {
    const { name } = useParams();
    const [ todoStatusFilter, setTodoStatusFilter] = useState<"Completed" | "Pending">("Pending")
    const [ todos, setTodos] = useState(MockTodos)

    return(
        <div className="flex">
            <ProfileBar username={name!}  todos={todos} todoStatusFilter={todoStatusFilter} setTodoStatusFilter={setTodoStatusFilter}/>
            <div className="flex">
                <ToDoList todos={todos}/>                
            </div>
        </div>
    )
}