"use client";
import { useState } from "react";
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function AuthForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>login</button>

      {step === 1 && isOpen && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOTPForm phone={phone} setPhone={setPhone} setStep={setStep} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={phone}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
