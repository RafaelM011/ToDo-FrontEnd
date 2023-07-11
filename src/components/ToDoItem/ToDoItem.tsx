type Props = {
    todo: {
        id: number;
        status: "Completed" | "Pending";
        description: string;  
    },
    toggleTodo: (todo: {
        id: number;
        status: "Completed" | "Pending";
        description: string;  
    }) => void;
    eraseTodo: (todo: {
        id: number;
        status: "Completed" | "Pending";
        description: string;  
    }) => void;
}

export const ToDoItem: React.FC<Props> = ({todo, toggleTodo, eraseTodo}): JSX.Element => {
    
    

    return(
        <li onClick={() => toggleTodo(todo)}>
            {todo.description}
        </li>
    )
}