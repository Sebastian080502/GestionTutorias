'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';

export default function UserForm() {
  const { createUser, setCurrentUser } = useUserStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: '',
    role: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.role) {
      setError("Todos los campos requeridos deben estar completos.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userPayload = {
        
        firstName: formData.firstName,
        secondName: formData.secondName,
        lastName: formData.lastName,
        secondLastName: formData.secondLastName,
        email: formData.email,
        password: formData.password,
        role: formData.role as "student" | "teacher",
      };

      console.log("Datos enviados al backend:", userPayload);
      const newUser = await createUser(userPayload);
      console.log("Respuesta del backend:", newUser);

      if (newUser && newUser.id) {
        setCurrentUser(newUser);
        localStorage.setItem("idUser", newUser.id); // Guarda `idUser` para su uso en StudentForm
        console.log("idUser guardado en localStorage:", newUser.id);

        alert("Usuario creado correctamente");
        router.push(formData.role === "student" ? "/student" : "/teacher");
      } else {
        setError("Error: No se recibió un id válido del backend.");
      }
    } catch (err) {
      setError("Error al crear usuario.");
      console.error("Error al crear usuario:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Registro de Usuario</h2>

      {error && <p className="text-error">{error}</p>}

      <input name="firstName" placeholder="Primer Nombre" onChange={handleChange} required className="input" />
      <input name="secondName" placeholder="Segundo Nombre" onChange={handleChange} className="input" />
      <input name="lastName" placeholder="Primer Apellido" onChange={handleChange} required className="input" />
      <input name="secondLastName" placeholder="Segundo Apellido" onChange={handleChange} className="input" />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="input" />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} required className="input" />

      <select name="role" onChange={handleChange} required className="input">
        <option value="">Selecciona un rol</option>
        <option value="student">Estudiante</option>
        <option value="teacher">Profesor</option>
      </select>

      <button type="submit" disabled={isLoading} className="button-primary">
        {isLoading ? "Creando usuario..." : "Crear Usuario"}
      </button>
    </form>
  );
}