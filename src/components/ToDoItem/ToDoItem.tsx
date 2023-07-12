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
        <li className="flex justify-between">
            <h1 className={`text-lg font-medium ${todo.status === "Completed" ? "line-through decoration-red-600 decoration-4" : ""}`} onClick={() => toggleTodo(todo)}> {todo.description} </h1>
            <button className="border-black border-r-2 border-l-2 rounded-full px-2 py-1" onClick={() => eraseTodo(todo)}> erase </button>
        </li>
    )
}