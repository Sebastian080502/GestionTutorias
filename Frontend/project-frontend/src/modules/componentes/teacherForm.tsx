'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createTeacher } from '@/services/teacher.service';

export default function TeacherForm() {
  const [formData, setFormData]= useState ({especialidad: "", disponibilidad:""});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [idUser, setIdUser] = useState<string | null>(null);
  const router = useRouter();

  // Obtener idUser desde localStorage cuando el componente carga
  useEffect(() => {
    const storedIdUser = localStorage.getItem('idUser');
    setIdUser(storedIdUser); 
    console.log('idUser obtenido desde localStorage:', storedIdUser);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!idUser || idUser.trim() === '') {
      setError('Error: No se encontró un idUser válido.');
      console.error('Error: idUser no está disponible en TeacherForm');
      setIsLoading(false);
      return;
    }

    const teacherData = {
      idUser,
      especialidad: formData.especialidad,
      disponibilidad: formData.disponibilidad,
    };

    console.log('Datos enviados al backend:', teacherData);


    try {
      await createTeacher(teacherData);
      alert('Docente creado exitosamente');
      router.push('/login');
    } catch (error) {
      setError('Error al crear docente');
      console.error('Error al crear docente', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="form-title">Crear Profesor</h2>
          {error && <p className="text-error">{error}</p>}
          <input
            name="especialidad"
            placeholder="Especialidad"
            onChange={handleChange}
            required
            className="input"
          />
          <input
            name="disponibilidad"
            placeholder="Disponibilidad"
            onChange={handleChange}
            required
            className="input"
          />
          <button type="submit" className="button-primary" disabled={isLoading}>
            {isLoading ? "Guardando..." : "Guardar Profesor"}
          </button>
        </form>
      </div>
    </div>
  );
}