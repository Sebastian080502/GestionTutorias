'use client';

import EntityTable from "@/modules/componentes/entityTables";

export default function UserPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
      <EntityTable entity="users" />
    </div>
  );
}