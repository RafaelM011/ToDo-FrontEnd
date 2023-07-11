import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface IData {
    user: string;
    email: string;
    password: string;
    repeatedPassword: string;
}

export const SignIn: React.FC = (): JSX.Element => {
    const [formResponse, setFormResponse] = useState<{response: boolean, label: string, errorMessage: string}>()
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as IData
        // const formValidation = validateData(formData)
        
        navigate(`user/1/${formData.user}`)
    }
   
    return(
        <>
            <div className="m-auto w-7/12 max-w-[500px] h-fit p-4 shadow-[0px_0px_20px_3px_rgba(0,0,0,1)] rounded-3xl relative top-[200px] bg-[#929E9E]">
                <h1 className="text-center text-2xl font-bold mb-10"> To-Do App </h1>
                <form onSubmit={(event) => handleSubmit(event)} className="">
                    <label htmlFor='user' className="block text-center font-bold"> Username: </label>
                    <input 
                        name='user' 
                        className="block pl-2 mx-auto max-w-[180px] w-11/12 outline-none rounded-full bg-inherit border-b-2 border-l-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" 
                        type="text" 
                        placeholder="username">
                    </input>
                    <p className="text-red-400 mx-autp h-fit w-fit"> {formResponse?.label === 'user' && formResponse?.errorMessage} </p>

                    <label htmlFor="password" className="block text-center font-bold mt-4"> Password: </label>
                    <input 
                        name="password" 
                        className="block pl-2 mx-auto max-w-[180px] w-11/12 outline-none rounded-full bg-inherit border-b-2 border-l-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" 
                        type="password" 
                        placeholder="password">
                    </input>
                    <p className="text-red-400 mx-auto h-fit w-fit"> {formResponse?.label === 'password' && formResponse?.errorMessage} </p>

                    <button className="block mx-auto max-w-[180px] w-11/12 mt-8 font-bold rounded-full shadow-[0px_0px_20px_3px_rgba(0,0,0,1)]" type="submit"> Sign In </button>    
                </form>
            </div>
        </>
    )
}