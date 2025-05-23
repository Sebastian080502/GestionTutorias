'use client';
import AsideComponent from "@/modules/componentes/aside.component";
import MenuHomeComponent from "@/modules/componentes/menu.componente";
import Aside from "@/modules/componentes/slider.componente";

export default function TeacherDashboard() {
  return (
    
    <div className="p-6">
     
      <AsideComponent/>
      <MenuHomeComponent/>
      <Aside/>
      
  
    </div>
  );
}