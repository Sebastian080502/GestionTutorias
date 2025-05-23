'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTeacherStore } from '@/stores/useTeacherStore';

export default function TeacherForm({ idUser }: { idUser: string }) {
  const { addTeacher } = useTeacherStore();
  const router = useRouter();
  const [formData, setFormData] = useState({
    especialidad: '',
    disponibilidad: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await addTeacher({ idUser, ...formData });
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-error">{error}</p>}
      <input name="especialidad" placeholder="Especialidad" onChange={handleChange} required />
      <input name="disponibilidad" placeholder="Disponibilidad" onChange={handleChange} required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Guardando...' : 'Guardar Docente'}
      </button>
    </form>
  );
}