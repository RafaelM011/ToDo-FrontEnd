import { useState } from 'react';
import { createPortal } from 'react-dom';
 
export const Register: React.FC = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    
    const handleRegisterClick = () => {
        setShowModal(true);
    }
    
    return(
        <div className="text-right p-4">
            <button className="text-2xl font-bold" onClick={handleRegisterClick}> Register </button>
            {showModal && createPortal(<h1 className='text-black'>Hello There</h1>,document.body)}
        </div>
    )
}