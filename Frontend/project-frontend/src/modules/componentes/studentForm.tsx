'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createStudent } from "@/services/student.service";

export default function StudentForm() {
  const [formData, setFormData] = useState({ programa: "", semestre: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idUser, setIdUser] = useState<string | null>(null);
  const router = useRouter();

  // Obtener idUser desde localStorage cuando el componente carga
  useEffect(() => {
    const storedIdUser = localStorage.getItem("idUser");
    setIdUser(storedIdUser);
    console.log("idUser obtenido desde localStorage:", storedIdUser);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!idUser || idUser.trim() === "") {
      setError("Error: No se encontró un idUser válido.");
      console.error("Error: idUser no está disponible en StudentForm");
      setIsLoading(false);
      return;
    }

    const studentData = {
      idUser,
      programa: formData.programa,
      semestre: formData.semestre,
    };

    console.log("Datos enviados al backend:", studentData);

    try {
      await createStudent(studentData);
      alert("Estudiante guardado correctamente");
      router.push("/login"); // Redirige al login
    } catch (err) {
      setError("Error al guardar estudiante");
      console.error("Error al crear estudiante:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="form-title">Crear Estudiante</h2>
          {error && <p className="text-error">{error}</p>}
          <input
            name="programa"
            placeholder="Programa"
            onChange={handleChange}
            required
            className="input"
          />
          <input
            name="semestre"
            placeholder="Semestre"
            onChange={handleChange}
            required
            className="input"
          />
          <button type="submit" className="button-primary" disabled={isLoading}>
            {isLoading ? "Guardando..." : "Guardar Estudiante"}
          </button>
        </form>
      </div>
    </div>
  );
}