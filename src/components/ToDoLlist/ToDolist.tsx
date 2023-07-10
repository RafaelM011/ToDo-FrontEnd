import { useState } from "react"
import {type Todos } from "../../types.d"
import { ToDoItem } from "../ToDoItem/ToDoItem";

type Props = {
    todos: Todos;
    addTodo: (todo: string) => void;
}

export const ToDoList: React.FC<Props> = ({todos, addTodo}): JSX.Element => {
    const [ inputValue, setInputValue] = useState("")

    const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    }

    return(
        <div className="w-[300px] text-center">
            <h1> To-Do List </h1>
            <input className="" type="text" placeholder="add todo" onChange={(event) => changeInputValue(event)}></input>
            <button onClick={() => addTodo(inputValue)}> Add </button>
            <ul>
                {todos.map(todo => <ToDoItem key={`0${todo.description}`} todo={todo}/>)}
            </ul>
        </div>
    )
}