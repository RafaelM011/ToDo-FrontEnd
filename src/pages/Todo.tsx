import { useState } from "react"
import { useParams } from "react-router-dom"
import { ProfileBar } from "../components/ProfileBar/ProfileBar";
import { type Todos } from "../types.d";

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
    const {id, name} = useParams();
    const [todoStatusFilter, setTodoStatusFilter] = useState<"Completed" | "Pending">("Pending")


    return(
        <>
            <ProfileBar username={name!}  todos={MockTodos} todoStatusFilter={todoStatusFilter} setTodoStatusFilter={setTodoStatusFilter}/>
        </>
    )
}