'use client';

import { useState } from "react";

export default function MenuHome() {
  // Simulación de usuario (luego lo puedes traer de contexto o store)
  const user = {
    name: "Nombre Usuario",
    role: "student", // o "teacher"
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Menú lateral */}
      <aside className={`bg-gray-800 text-white w-64 p-4 ${menuOpen ? '' : 'hidden md:block'}`}>
        <h2 className="text-xl font-bold mb-6">Menú</h2>
        <ul className="space-y-4">
          <li><a href="#" className="hover:underline">Inicio</a></li>
          <li><a href="#" className="hover:underline">Tutorial</a></li>
        </ul>
        <div className="mt-10 border-t border-gray-600 pt-4">
          <div className="font-semibold">{user.name}</div>
          <div className="text-sm capitalize">{user.role}</div>
        </div>
      </aside>
      {/* Contenido principal */}
      <main className="flex-1 p-8">
        <button
          className="md:hidden mb-4 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Cerrar menú" : "Abrir menú"}
        </button>
        <h1 className="text-2xl font-bold mb-4">Bienvenido al módulo de Tutoriales</h1>
        {/* Aquí va el contenido de la página */}
      </main>
    </div>
  );
}