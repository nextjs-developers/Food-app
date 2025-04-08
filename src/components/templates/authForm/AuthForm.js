"use client";
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useState } from "react";

function AuthForm({isOpen , setIsOpen , step ,setStep}) {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <ModalContainer isOpen={isOpen}>
        {step === 1 ? (
          <SendOTPForm phone={phone} setIsOpen={setIsOpen} setPhone={setPhone} setStep={setStep} />
        ) : (
          <CheckOTPForm
            mobile={phone}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        )}
      </ModalContainer>
    </div>
  );
}

export default AuthForm;
