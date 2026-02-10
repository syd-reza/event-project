"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setshowPassword] = useState(false);

  const inputPasswordhandler = () => {
    setshowPassword((prev) => !prev);
  };

  const router = useRouter();

  return (
    <div className="container mt-6">
      <div className="flex justify-between items-center mb-8 px-2.5">
        <span className="w-2.5 h-2.5"></span>
        <p className="font-bold text-lg">Login</p>
        <img onClick={() => router.back()} src="/svg/ChevronLeft.svg" alt="cheron-left" />
      </div>

      <form action="#" className="">
        <div
          dir="ltr"
          className="flex items-center gap-4 w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-3.5 px-6"
        >
          <img src="/svg/Email.svg" alt="email-icon" />
          <input
            type="email"
            placeholder="Enter your email"
            className="focus:outline-none w-full"
          />
        </div>

        <div
          dir="ltr"
          className="mt-4 flex items-center gap-4 w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-full py-3.5 px-6"
        >
          <img src="/svg/Password.svg" alt="password-icon" />
          <input
            type="password"
            placeholder="Enter your password"
            className="focus:outline-none w-full"
          />
          <div onClick={inputPasswordhandler}>
            <img
              src={`/svg/${showPassword ? "Eye Slash.svg" : "Eye Slash.svg"}`}
              alt="eyse-icon"
            />
          </div>
        </div>

        <p className="text-[#199A8E] mt-2 text-sm">Forgot Password</p>

        <input
          type="submit"
          value="Login"
          className="w-full py-3 bg-[#199A8E] text-white rounded-full mt-8"
        />
      </form>

      <p className="text-center text-[#717784] text-sm mt-6">
        Don’t have an account? <span className="text-[#199A8E]">Sign Up</span>
      </p>
    </div>
  );
}
