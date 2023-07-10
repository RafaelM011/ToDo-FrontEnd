type Props = {
    todo: {
        status: "Completed" | "Pending";
        description: string;  
    }
}

export const ToDoItem: React.FC<Props> = ({todo}): JSX.Element => {
    return(
        <li>
            {todo.description}
        </li>
    )
}