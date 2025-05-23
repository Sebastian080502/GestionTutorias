'use client';

import AsideComponent from "@/modules/componentes/aside.component";
import { useAuth } from "@/modules/hooks/useAuth";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div className="flex h-screen">
        <AsideComponent />
        <main className="flex-1 p-6">{children}</main>
      </div>
    );
  }

  return <>{children}</>;
}