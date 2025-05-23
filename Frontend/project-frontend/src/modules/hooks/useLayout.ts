export function useLayout(pathname: string) {
  const routes = [
    { path: "/Home", name: "Home" },
    { path: "/tutorial", name: "Tutorial" },
    { path: "/report", name: "Reporte" },
    
  ];

  // Busca el título basado en la ruta actual, si no encuentra ninguno usa "Inicio"
  const currentRoute = routes.find(route => route.path === pathname);
  const title = currentRoute ? currentRoute.name : "Inicio";

  return {
    title,
    routes,
  };
}
