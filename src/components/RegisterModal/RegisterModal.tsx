import { useState } from "react";
import closeModalIMG from "../../assets/closeModal.png"
import { useNavigate} from "react-router-dom"

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IData {
    username: string;
    email: string;
    password: string;
    repeatedPassword: string;
}

export const RegisterModal: React.FC<Props> = ({setShowModal}): JSX.Element => {
    const [formResponse, setFormResponse] = useState<{response: boolean, label: string, errorMessage: string}>()
    const navigate = useNavigate()
    const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m
    
    const postUser = async ({username, email, password} : {username: string, email: string, password: string}) => {
        const request = await fetch('http://127.0.0.1:4000/register', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password,
                email
            })
        })

        const data = await request.json()
        return data
    }

    const validateData = (data: IData): {response: boolean, label: string, errorMessage: string} => {
        let { username, email, password, repeatedPassword} = data;
        
        let isValidEmail = EMAIL_REGEX.test(email)
        let isValidPassword = PASSWORD_REGEX.test(password);
        let isValidRepetition = password === repeatedPassword;
        
        if(!isValidEmail) return {response: false, label:"email", errorMessage:"Email is incorrect"}
        else if(!isValidPassword) return {response: false, label:"password", errorMessage:"Password doesn't match the criteria"}
        else if (!isValidRepetition) return {response: false, label:"repeatedPassword", errorMessage:"Passwords are not equal"}

        postUser({username, email, password})
        return {response: true, label:"", errorMessage:""};
    }   

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement)) as unknown as IData
        const formValidation = validateData(formData)

        if(formValidation.response === true){
            setFormResponse(formValidation)
            navigate(`/user/1/${formData.username}`)
        } 
        else setFormResponse(formValidation)
    }
    
    const handleCloseModal = () =>{
        setShowModal(false)
    }
 
    return(
        <>
            <div 
                className="absolute top-[240px] left-0 right-0 mx-auto w-7/12 max-w-[500px] h-fit p-4 z-10 shadow-[0px_0px_20px_3px_rgba(0,0,0,1)] rounded-3xl bg-[#929E9E]"
            >
                <div className="flex w-full justify-end" >
                    <h1 className="text-2xl font-bold basis-6/12"> Register </h1>
                    <img className="cursor-pointer" src={closeModalIMG} alt="close-modal" onClick={handleCloseModal}/>
                </div>
                
                <form onSubmit={(event) => handleSubmit(event)} className="">
                    <label htmlFor='username' className="block text-center font-bold mt-3"> Username: </label>
                    <input name='username' className="block mx-auto max-w-[180px] w-11/12 outline-none rounded-full border-l-2 bg-inherit border-b-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" type="text" placeholder="username"></input>
                    {/* <p className="text-red-400 mx-autp h-fit w-fit"> {formResponse?.label === 'user' && formResponse?.errorMessage} </p> */}

                    <label htmlFor="email" className="block text-center font-bold mt-3"> E-mail: </label>
                    <input name="email" className="block mx-auto max-w-[180px] w-11/12 outline-none rounded-full border-l-2 bg-inherit border-b-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" type="text" placeholder="email@domain.com"></input>
                    <p className="text-red-400 mx-auto h-fit w-fit"> {formResponse?.label === 'email' && formResponse?.errorMessage} </p>


                    <label htmlFor="password" className="block text-center font-bold mt-3"> Password: </label>
                    <input name="password" className="block mx-auto max-w-[180px] w-11/12 outline-none rounded-full border-l-2 bg-inherit border-b-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" type="password" placeholder="password"></input>
                    <p className="text-red-400 mx-auto h-fit w-fit"> {formResponse?.label === 'password' && formResponse?.errorMessage} </p>

                    <label htmlFor="repeatedPassword" className="block text-center font-bold mt-3"> Repeat Password: </label>
                    <input name="repeatedPassword"  className="block mx-auto max-w-[180px] w-11/12 outline-none rounded-full border-l-2 bg-inherit border-b-2 border-black focus:border-b-0 focus:border-l-2 focus:border-r-2 placeholder:text-[#929E9E]" type="password" placeholder="repeat password"></input>    
                    <p className="text-red-400 mx-auto h-fit w-fit"> {formResponse?.label === 'repeatedPassword' && formResponse?.errorMessage} </p>

                    <button className="block mx-auto max-w-[180px] w-11/12 mt-8 p-2 font-bold rounded-full shadow-[0px_0px_20px_3px_rgba(0,0,0,1)]" type="submit"> Create new account </button>    
                </form>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#CED6D6]">
            </div>
        </>
    )
}