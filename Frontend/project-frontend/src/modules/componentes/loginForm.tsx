'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/modules/hooks/useAuth"; // ajusta el path según tu estructura

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const router = useRouter();

  const { login, error, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !role) {
      alert("Completa todos los campos.");
      return;
    }

    try {
      await login(email, password, role); // Usamos el store de Zustand
      router.push("/Home"); // redirige al dashboard o pantalla deseada
    } catch (e) {
      // El error ya se maneja desde el store, puedes mostrarlo si es necesario
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <main className="center-screen">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">Iniciar Sesión</h2>
        {error && <p className="text-error">{error}</p>}
        <input
          className="input"
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <select
          className="input"
          value={role}
          onChange={e => setRole(e.target.value)}
          required
        >
          <option value="">Selecciona un rol</option>
          <option value="student">Estudiante</option>
          <option value="teacher">Profesor</option>
        </select>
        <button className="button-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Ingresando..." : "Entrar"}
        </button>
        <button
          type="button"
          className="button-primary mt-2"
          onClick={handleRegister}
        >
          Registrar usuario
        </button>
      </form>
    </main>
  );
}
