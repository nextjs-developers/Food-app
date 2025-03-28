"use client";

import ModalContainer from "@/components/partials/container/ModalContainer";
import { useState } from "react";
import SendOTPForm from "./SendOTPForm";

function AuthForm() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  
  
    return (
      <div>
        
        <button onClick={() => setIsOpen(true)} className="hover:text-white transition">Login</button>
       
        {step === 1 && (
          <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
            <SendOTPForm
              mobile={mobile}
              setMobile={setMobile}
              setStep={setStep}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
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
