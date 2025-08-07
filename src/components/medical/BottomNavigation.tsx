import { Home, FileText, User, HelpCircle } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Início", path: "/dashboard" },
    { icon: FileText, label: "Casos", path: "/cases" },
    { icon: User, label: "Perfil", path: "/profile" },
    { icon: HelpCircle, label: "Suporte", path: "/help" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, path }) => (
          <NavLink
            key={path}
            to={path}
            className={cn(
              "flex flex-col items-center justify-center p-2 min-w-0 flex-1 text-xs font-medium transition-colors",
              location.pathname === path
                ? "text-white"
                : "text-white/70 hover:text-white"
            )}
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="truncate">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;