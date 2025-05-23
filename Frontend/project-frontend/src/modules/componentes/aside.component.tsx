'use client';

import Link from 'next/link';
import { useUserStore } from '@/stores/useUserStore';
import { Settings } from 'lucide-react';

export default function AsideComponent() {
  const { currentUser } = useUserStore();

  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col justify-between p-4">
      <nav className="space-y-4">
        <Link href="/dashboard" className="block hover:underline">Inicio</Link>
        <Link href="/tutorias" className="block hover:underline">Tutorías</Link>
        {currentUser?.role === 'teacher' && (
          <Link href="/reportes" className="block hover:underline">Reportes</Link>
        )}
      </nav>
      <div className="border-t pt-4 mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold">{currentUser?.firstName}</p>
          <p className="text-xs">{currentUser?.role}</p>
        </div>
        <Settings className="w-5 h-5 cursor-pointer" />
      </div>
    </aside>
  );
}
