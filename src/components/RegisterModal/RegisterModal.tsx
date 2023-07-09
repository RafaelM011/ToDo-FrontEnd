import closeModalIMG from "../../assets/closeModal.png"
import { useNavigate} from "react-router-dom"

type Props = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterModal: React.FC<Props> = ({setShowModal}): JSX.Element => {
    const navigate = useNavigate()
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement))
        
        navigate("/user/1/rafa")
    }
    
    const handleCloseModal = () =>{
        setShowModal(false)
    }
 
    return(
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-7/12 max-w-[500px] h-fit p-4 border-2 border-black z-10">
                <div className="flex w-full justify-end" >
                    <h1 className="text-2xl font-bold basis-6/12"> Register </h1>
                    <img className="cursor-pointer" src={closeModalIMG} alt="close-modal" onClick={handleCloseModal}/>
                </div>
                <form onSubmit={(event) => handleSubmit(event)} className="">
                    <label htmlFor='user' className="block text-center"> Username: </label>
                    <input name='user' className="block mx-auto max-w-[180px] w-11/12" type="text"></input>
                    
                    <label htmlFor="email" className="block text-center"> E-mail: </label>
                    <input name="email" className="block mx-auto max-w-[180px] w-11/12" type="text"></input>
                    
                    <label htmlFor="password" className="block text-center"> Password: </label>
                    <input name="password" className="block mx-auto max-w-[180px] w-11/12" type="password"></input>
                    
                    <label htmlFor="repeatedPassword" className="block text-center"> Repeat Password: </label>
                    <input name="repeatedPassword"  className="block mx-auto max-w-[180px] w-11/12" type="password"></input>    

                    <button className="block mx-auto max-w-[180px] w-11/12" type="submit"> Create new account </button>    
                </form>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-500 opacity-20">
            </div>
        </>
    )
}