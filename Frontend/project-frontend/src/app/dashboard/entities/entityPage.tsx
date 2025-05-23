'use client';

import EntityTable from "@/modules/componentes/entityTables";

export default function EntityPage({ params }: { params: { entity: string } }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Gestión de {params.entity}</h2>
      <EntityTable entity={params.entity} />
    </div>
  );
}