import { type Todos } from "../../types.d";
import { ToDoItem } from "../ToDoItem/ToDoItem";


type Props = {
    todos: Todos;
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

export const FilteredTodos: React.FC<Props> = ({todos, toggleTodo, eraseTodo}): JSX.Element => {
    return(
        <div className="w-[300px] text-center">
            <h1> Filtered To-Do List </h1>
            <ul>
                {todos.map(todo => <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} eraseTodo={eraseTodo}/>)}
            </ul>
        </div>
    )
} 