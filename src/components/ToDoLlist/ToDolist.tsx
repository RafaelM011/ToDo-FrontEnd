import { useState } from "react"
import {type Todo } from "../../types.d"
import { ToDoItem } from "../ToDoItem/ToDoItem";

type Props = {
    todos: Todo[];
    addTodo: (todo: string) => void;
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

export const ToDoList: React.FC<Props> = ({todos, addTodo, toggleTodo, eraseTodo}): JSX.Element => {
    const [ inputValue, setInputValue] = useState("")

    const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value)
    }

    const handleButton = () => {
        setInputValue('')
        addTodo(inputValue)
    }

    return(
        <div className="w-3/5 max-w-[400px] h-[500px] py-8 px-4 text-center self-center rounded-lg shadow-[0px_0px_5px_5px_rgba(0,0,0,0.3)]">
            <h1 className="text-2xl font-bold shadow-xl mb-8"> To-Do List </h1>
            <div className="flex justify-between mb-8 w-full">
                <input className="w-7/12 outline-none bg-inherit border-l-2 border-b-2 border-black rounded-full px-3" type="text" placeholder="add todo" value={inputValue} onChange={(event) => changeInputValue(event)}></input>
                <button className="border-black border-r-2 border-l-2 rounded-full px-2 py-1" onClick={handleButton}> Add </button>
            </div>
            
            <ul className="flex flex-col gap-4">
                {todos.map(todo => <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} eraseTodo={eraseTodo}/>)}
            </ul>
        </div>
    )
}