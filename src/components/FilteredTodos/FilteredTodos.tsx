import { type Todos } from "../../types.d";
import { ToDoItem } from "../ToDoItem/ToDoItem";


type Props = {
    todos: Todos;
}

export const FilteredTodos: React.FC<Props> = ({todos}): JSX.Element => {
    return(
        <div className="w-[300px] text-center">
            <h1> Filtered To-Do List </h1>
            <ul>
                {todos.map(todo => <ToDoItem key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    )
} 