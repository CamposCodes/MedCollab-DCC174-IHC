import { ArrowLeft, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  userName?: string;
  userAvatar?: string;
  showNotifications?: boolean;
}

const Header = ({ 
  title, 
  showBack = false, 
  userName = "Dr. João", 
  userAvatar, 
  showNotifications = true 
}: HeaderProps) => {
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  // Fecha o popup ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotifOpen(false);
      }
    }
    if (notifOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notifOpen]);

  return (
    <header className="medical-header">
      <div className="flex items-center gap-3">
        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-lg font-medium text-white">
          {title || `Olá, ${userName}!`}
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        {showNotifications && (
          <div className="relative" ref={notifRef}>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:bg-white/10"
              tabIndex={0}
              aria-label="Abrir notificações"
              onClick={() => setNotifOpen((open) => !open)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full border-2 border-primary"></span>
            </Button>
            {notifOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-50 border border-blue-200 animate-fade-in">
                <div className="p-3 border-b text-sm font-semibold text-blue-700 bg-blue-50 rounded-t-lg">
                  Notificações
                </div>
                <ul className="max-h-56 overflow-y-auto">
                  <li className="px-4 py-3 flex gap-2 items-start hover:bg-blue-50 transition-colors cursor-pointer">
                    <span className="inline-block mt-1 h-2 w-2 rounded-full bg-warning"></span>
                    <div>
                      <div className="text-sm font-medium text-blue-900">Novo caso recebido</div>
                      <div className="text-xs text-blue-700">Você recebeu um novo caso para análise.</div>
                      <div className="text-xs text-blue-500 mt-1">há 2 minutos</div>
                    </div>
                  </li>
                  <li className="px-4 py-3 flex gap-2 items-start hover:bg-blue-50 transition-colors cursor-pointer">
                    <span className="inline-block mt-1 h-2 w-2 rounded-full bg-success"></span>
                    <div>
                      <div className="text-sm font-medium text-blue-900">Caso respondido</div>
                      <div className="text-xs text-blue-700">Seu caso foi respondido por um especialista.</div>
                      <div className="text-xs text-blue-500 mt-1">há 1 hora</div>
                    </div>
                  </li>
                  <li className="px-4 py-3 flex gap-2 items-start hover:bg-blue-50 transition-colors cursor-pointer">
                    <span className="inline-block mt-1 h-2 w-2 rounded-full bg-destructive"></span>
                    <div>
                      <div className="text-sm font-medium text-blue-900">Caso devolvido</div>
                      <div className="text-xs text-blue-700">Um caso foi devolvido para revisão.</div>
                      <div className="text-xs text-blue-500 mt-1">há 3 horas</div>
                    </div>
                  </li>
                </ul>
                <button
                  className="w-full p-2 text-xs text-center font-semibold text-blue-700 bg-blue-50 rounded-b-lg hover:bg-blue-100 hover:text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => {
                    setNotifOpen(false);
                    // Aqui você pode adicionar navegação para a página de notificações, se desejar
                  }}
                  tabIndex={0}
                  aria-label="Ver todas as notificações"
                >
                  Ver todas as notificações
                </button>
              </div>
            )}
          </div>
        )}
        <Avatar
          className="h-10 w-10 border-2 border-white/20 cursor-pointer"
          onClick={() => navigate("/profile")}
          tabIndex={0}
          role="button"
          aria-label="Ir para o perfil"
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") navigate("/profile");
          }}
        >
          <AvatarImage src={userAvatar} />
          <AvatarFallback className="bg-white/20 text-white font-medium">
            {userName.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;