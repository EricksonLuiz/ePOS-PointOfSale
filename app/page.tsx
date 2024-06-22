"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "./images/logo.svg";
import Keypad from "./_components/ui/Keypad";

const Login: React.FC = () => {
  const [pin, setPin] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (pin === "0000") {
      router.push("/home");
    }
  }, [pin, router]);

  const handleKeyPress = (key: number | string) => {
    if (key === "←") {
      setPin("");
    } else {
      setPin((prevPin) =>
        prevPin.length < 4 ? prevPin + key.toString() : prevPin,
      );
    }
  };

  const renderPinInputs = () => {
    const inputs = [];
    for (let i = 0; i < 4; i++) {
      inputs.push(
        <input
          key={i}
          type="password"
          className={`mx-2 h-4 w-4 rounded-full border border-0 text-center text-[#734e40] ${
            pin.length > i ? "bg-b4" : "bg-b1"
          }`}
          value={pin[i] || ""}
          readOnly
        />,
      );
    }
    return inputs;
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-[5] items-center justify-center bg-b1">
        <Image src={logo} alt="Logo" width={180} />
      </div>
      <div className="flex flex-[5] items-center justify-center bg-b5">
        <div className="text-center text-texto1">
          <div>
            <p
              id="textoSenha"
              className={`text-sm text-[#f2b885] ${
                pin.length > 0 ? "invisible" : ""
              }`}
            >
              Insira a senha!
            </p>
            <div className="mb-4 mt-2 flex justify-center">
              {renderPinInputs()}
            </div>
            <Keypad onKeyPress={handleKeyPress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
