import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    username: string;
    todos: {
      status: "Completed" | "Pending";
      description: string;  
    }[];
    todoStatusFilter: "Completed" | "Pending" | "All";
    setTodoStatusFilter: React.Dispatch<React.SetStateAction<"Completed" | "Pending" | "All">>;
}

export const ProfileBar: React.FC<Props> = ({username, todos, todoStatusFilter, setTodoStatusFilter}): JSX.Element => {
    const [toggleState, setToggleState] = useState(1)
    const navigate = useNavigate()
    const completedTodos = todos.filter((todo) => todo.status === "Completed").length
    const pendingTodos = todos.filter((todo) => todo.status === "Pending").length

    const handleToggleButton = () => {
        if(toggleState === 1) 
        {
            setTodoStatusFilter("Pending")
            setToggleState(2)
        }
        if(toggleState === 2) 
        {
            setTodoStatusFilter("Completed")
            setToggleState(3)
        }
        if(toggleState === 3) 
        {
            setTodoStatusFilter("All")
            setToggleState(1)
        }
    }

    return(
        <div className="basis-1/6 h-[100vh] bg-[#929E9E] z-10 py-8 px-4 shadow-[4px_0px_10px_5px_rgba(0,0,0,0.5)] relative max-[940px]:hidden">
            <h1 className="text-center font-bold text-2xl"> {username} </h1>
            
            <div className="flex flex-col gap-3 mt-5">
                <h2 className="flex justify-between font-semibold text-lg">  
                    <span> Todos: </span> 
                    <span> {completedTodos + pendingTodos} </span>
                </h2>
                <h2 className="flex justify-between font-semibold text-lg"> 
                    <span> Completed: </span>
                    <span> {completedTodos} </span>
                </h2>
                <h2 className="flex justify-between font-semibold text-lg"> 
                    <span> Pending: </span> 
                    <span> {pendingTodos} </span>
                </h2>
            </div>

            <button className="absolute left-0 right-0 mx-auto mt-20 rounded-full bg-black h-10 w-6/12 min-w-[100px] px-3" role="toggle-button" onClick={handleToggleButton}> 
                <span 
                    className={`rounded-full bg-white w-[30px] h-[30px] block my-auto absolute bottom-0 top-0 ${toggleState === 1 ? "right-0 left-0 mx-auto" : toggleState === 2 ? "right-3" : "left-3"}`}>  
                </span> 
                <h2 className="absolute mx-auto left-0 right-0 -bottom-10 text-xl font-semibold"> {todoStatusFilter} </h2>
            </button>

            <button className="absolute left-0 right-0 bottom-10 text-2xl font-bold rounded-full shadow-[0px_0px_4px_4px_rgba(0,0,0,0.3)] p-1 mx-6  " onClick={() => navigate("/")}> Sign Out </button>
        </div>
    )
}