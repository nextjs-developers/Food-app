"use client";
import { useEffect, useRef, useState } from 'react'
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOTPForm from "./SendOTPForm";

function AuthForm(isOpen,setIsOpen,refrence) {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
   
  
    return (
      <div>
        
       <button onClick={()=>setIsOpen(true)}>login</button>
        {step === 1 && (
          <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
            <SendOTPForm
              mobile={mobile}
              setMobile={setMobile}
              setStep={setStep}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              refrence={refrence}
            />
          </ModalContainer>
        )}
        {step === 2 && (
          <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
            {/* <CheckOTPForm
              mobile={mobile}
              setStep={setStep}
              setIsOpen={setIsOpen}
            /> */}
          </ModalContainer>
        )}
      </div>
    );
}

export default AuthForm
