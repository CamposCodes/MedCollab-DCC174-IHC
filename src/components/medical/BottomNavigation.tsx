import { Home, FileText, User, HelpCircle } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNavigation = () => {
  const location = useLocation();

  // Corrige o match para rotas de home/dashboard
  const isActivePath = (path: string) => {
    if (path === "/home") {
      return location.pathname === "/home" || location.pathname === "/" || location.pathname === "/dashboard";
    }
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, label: "Início", path: "/home" },
    { icon: FileText, label: "Casos", path: "/cases" },
    { icon: User, label: "Perfil", path: "/profile" },
    { icon: HelpCircle, label: "Suporte", path: "/help" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-border z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = isActivePath(path);
          return (
            <NavLink
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center p-2 min-w-0 flex-1 text-xs font-medium transition-all duration-200",
                isActive
                  ? "text-white bg-primary-foreground/10 rounded-lg scale-105 shadow-md"
                  : "text-white/70 hover:text-white"
              )}
              style={isActive ? { boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" } : {}}
            >
              <Icon
                className={cn(
                  "h-5 w-5 mb-1 transition-transform duration-200",
                  isActive && "scale-110"
                )}
              />
              <span
                className={cn(
                  "truncate transition-transform duration-200",
                  isActive && "scale-105"
                )}
              >
                {label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;