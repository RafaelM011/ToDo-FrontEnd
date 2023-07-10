import {type Todos } from "../../types.d"

type Props = {
    todos: Todos;
}

export const ToDoList: React.FC<Props> = ({todos}): JSX.Element => {
    
    return(
        <div className="w-[300px] text-center">
            <h1> To-Do List </h1>
            <input className="" type="text" placeholder="add todo"></input>
            <ul>
                
            </ul>
        </div>
    )
}