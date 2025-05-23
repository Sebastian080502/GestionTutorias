'use client';

import { useFetch } from "@/modules/hooks/useFetch";

export default function EntityTable({ entity }: { entity: string }) {
  const { data, loading, error } = useFetch<any>(entity);

  if (loading) return <p>Cargando {entity}...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <table className="w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => <th key={key} className="p-2">{key}</th>)}
        </tr>
      </thead>
     <tbody>
  {data.map((item, index) => (
    <tr key={index} className="border-t">
      {Object.values(item).map((value, idx) => (
        <td key={idx} className="p-2">
          {typeof value === "object" ? JSON.stringify(value) : String(value)}
        </td>
      ))}
    </tr>
  ))}
</tbody>

    </table>
  );
}