'use client';

import Header from "@/modules/componentes/Header";
import { useRouter } from "next/navigation";
import { useAuth } from "@/modules/hooks/useAuth";
import { useEffect } from "react";
import AsideComponent from "@/modules/componentes/aside.component";

export default function HomePage() {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      // No redirige, muestra la página principal con Header
      return;
    } else {
      router.push(`/dashboard/${currentUser.role}`);
    }
  }, [currentUser, router]);

  return (
    <>
      <Header />
      <main className="center-screen">
        <div className="form-container text-center">
          <h2 className="form-title">¡Gestiona y agenda tus tutorías fácilmente!</h2>
          <p className="text-gray-700 mt-4">
            Usa el botón "Ingresar" para iniciar sesión o registrarte.
          </p>
        </div>
      </main>
      
    </>
    
  );
}