import { useNavigate } from "react-router-dom";

type Props = {
    username: string;
    todos: {
      status: "Completed" | "Pending";
      description: string;  
    }[];
    todoStatusFilter: "Completed" | "Pending";
    setTodoStatusFilter: React.Dispatch<React.SetStateAction<"Completed" | "Pending">>;
}

export const ProfileBar: React.FC<Props> = ({username, todos, todoStatusFilter, setTodoStatusFilter}): JSX.Element => {
    const navigate = useNavigate()
    const completedTodos = todos.filter((todo) => todo.status === "Completed").length
    const pendingTodos = todos.filter((todo) => todo.status === "Pending").length

    const handleToggleButton = () => {
        if(todoStatusFilter === "Pending") setTodoStatusFilter("Completed")
        else setTodoStatusFilter("Pending")
    }

    return(
        <div>
            <h1> {username} </h1>
            <h2> Todos : {completedTodos + pendingTodos} </h2>
            <h2> Completed todos: {completedTodos}</h2>
            <h2> Pending todos: {pendingTodos}</h2>

            <button role="toggle-button" onClick={handleToggleButton}> CLICK ME </button>
            <h2> {todoStatusFilter} </h2>

            <button onClick={() => navigate("/")}> Sign Out </button>
        </div>
    )
}