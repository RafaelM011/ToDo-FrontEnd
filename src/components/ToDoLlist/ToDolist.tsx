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

    const handleButton = () => {
        setInputValue('')
        addTodo(inputValue)
    }

    return(
        <div className="w-[300px] text-center">
            <h1> To-Do List </h1>
            <input className="" type="text" placeholder="add todo" value={inputValue} onChange={(event) => changeInputValue(event)}></input>
            <button onClick={handleButton}> Add </button>
            <ul>
                {todos.map(todo => <ToDoItem key={todo.id} todo={todo}/>)}
            </ul>
        </div>
    )
}