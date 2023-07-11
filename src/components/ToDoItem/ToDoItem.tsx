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
        <li className="flex justify-center gap-1">
            <h1 onClick={() => toggleTodo(todo)}> {todo.description} </h1>
            <button onClick={() => eraseTodo(todo)}> erase </button>
        </li>
    )
}