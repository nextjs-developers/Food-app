import React from 'react'

function ModalContainer({ children, isOpen,setIsOpen }) {
    if(!isOpen) return null;

  return (
    
    <div className="modal modal-open fixed inset-0 z-10">
    <div className="modal-backdrop bg-black/20 backdrop-blur-sm">

    </div>
    <div className="modal-box w-full h-full max-w-none rounded-none flex items-center justify-center bg-transparent shadow-none">
      {children}
    </div> 
  </div>
  
  )
}

export default ModalContainer
