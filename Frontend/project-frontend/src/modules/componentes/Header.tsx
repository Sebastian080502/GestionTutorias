'use client';

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hero-gradient animate-fade-in">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-5xl md:text-6xl font-extrabold text-hero-gradient drop-shadow-lg text-center animate-slide-down">
          Bienvenido a <span className="text-hero-yellow">Tutoria Plus</span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-white font-medium text-center animate-slide-up">
          Agenda tu tutoría fácilmente
        </p>
        <button
          className="mt-10 btn-hero animate-pop-in"
          onClick={() => router.push("/login")}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}