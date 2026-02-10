"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Loginandsingup() {
  const router = useRouter();

  return (
    <div className="container h-screen flex flex-col items-center justify-center bg-white relative">
      <Image
        src="/logo.png"
        alt="Doctor"
        width={96}
        height={96}
        className="mx-auto object-contain mb-10"
      />
      <h3 className="font-bold text-[#101623] text-xl mb-2.5">
        Let’s get started
      </h3>
      <p className="text-center text-[#717784]">
        Login to enjoy the features we’ve provided, and stay healthy!
      </p>
      <button
        onClick={() => router.push("/login")}
        className="font-medium mt-[60px] bg-[#199A8E] w-full rounded-full text-white py-4 mb-4"
      >
        Login
      </button>
      <button
        onClick={() => router.push("/singup")}
        className="font-medium border w-full rounded-full text-[#199A8E] py-4"
      >
        Sign Up
      </button>
    </div>
  );
}
