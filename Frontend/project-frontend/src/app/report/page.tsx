'use client';

import EntityTable from "@/modules/componentes/entityTables";
import TeacherForm from "@/modules/componentes/teacherForm";

export default function TeacherDashboard() {
  return (
    
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard Profesores</h2>
      
      <EntityTable entity="reports" />
  
    </div>
  );
}