import {type Todos } from "../../types.d"
import { ToDoItem } from "../ToDoItem/ToDoItem";

type Props = {
    todos: Todos;
}

export const ToDoList: React.FC<Props> = ({todos}): JSX.Element => {
    
    return(
        <div className="w-[300px] text-center">
            <h1> To-Do List </h1>
            <input className="" type="text" placeholder="add todo"></input>
            <ul>
                {todos.map(todo => <ToDoItem key={todo.description} todo={todo}/>)}
            </ul>
        </div>
    )
}