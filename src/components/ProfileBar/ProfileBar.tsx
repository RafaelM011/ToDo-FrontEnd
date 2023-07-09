type Props = {
    username: string;
    todos: {
      status: "Completed" | "Pending";
      description: string;  
    }[]
}

export const ProfileBar: React.FC<Props> = ({username, todos}): JSX.Element => {
    const completedTodos = todos.map((todo) => todo.status === "Completed").length
    const pendingTodos = todos.map((todo) => todo.status === "Pending").length

    return(
        <div>
            <h1> {username} </h1>
            <h2> Completed todos: {completedTodos}</h2>
            <h2> Pending todos: {pendingTodos}</h2>
        </div>
    )
}