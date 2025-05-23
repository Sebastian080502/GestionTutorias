"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "@/modules/hooks/useLayout";
import { FaBars } from "react-icons/fa";
import { useSidebar } from "@/modules/hooks/useSidebar";

export default function Aside() {
  const pathname = usePathname();
  const { routes, title } = useLayout(pathname);
  const { open, openSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <button
        className="p-4 focus:outline-none z-40 fixed top-4 left-4"
        onClick={openSidebar}
        aria-label="Abrir menú"
        style={{ background: "rgba(255,255,255,0.85)", borderRadius: "50%" }}
      >
        <FaBars size={24} />
      </button>
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-100 p-4 shadow-md z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">{title}</h1>
          <button
            className="text-gray-500"
            onClick={closeSidebar}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>
        <nav>
          <ul className="space-y-2">
            {routes.map(({ path, name }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`block px-3 py-2 rounded hover:bg-gray-300 ${
                    pathname === path ? "bg-gray-300 font-semibold" : ""
                  }`}
                  onClick={closeSidebar}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {open && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-lg z-40 transition-all"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}