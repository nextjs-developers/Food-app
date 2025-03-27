"use client";

import ModalContainer from "@/components/partials/container/ModalContainer";
import { useState } from "react";

function AuthForm() {
    const [step, setStep] = useState(1);
    const [mobile, setMobile] = useState("");
    const [isOpen, setIsOpen] = useState(false);
  
  
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Login</button>
        {step === 1 && (
          <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
            {/* <SendOTPForm
              mobile={mobile}
              setMobile={setMobile}
              setStep={setStep}
            /> */}
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
