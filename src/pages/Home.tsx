import { useState } from 'react';
import { createPortal } from 'react-dom';
import { RegisterModal } from '../components/RegisterModal/RegisterModal';

export default function Home(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
    
  const handleRegisterClick = () => {
      setShowModal(true);
  }

  return (
    <>
        <div className="text-right p-4">
          <button className="text-2xl font-bold" onClick={handleRegisterClick}> Register </button>
          {showModal && createPortal(<RegisterModal setShowModal={setShowModal}/>,document.getElementById('root')!)}
        </div>
    </>
  )
}