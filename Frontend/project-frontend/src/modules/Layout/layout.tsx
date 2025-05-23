'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';
import AsideComponent from '@/modules/componentes/aside.component';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { currentUser } = useUserStore();

  if (!currentUser) {
    router.push('/login');
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Menú lateral */}
      <AsideComponent />

      {/* Contenido principal */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}