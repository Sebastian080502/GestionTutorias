import { useState } from "react";

export function useSidebar(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen);

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  const toggleSidebar = () => setOpen((prev) => !prev);

  return { open, openSidebar, closeSidebar, toggleSidebar };
}