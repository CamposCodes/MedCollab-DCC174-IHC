import { ArrowLeft, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

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
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-warning rounded-full"></span>
          </Button>
        )}
        <Avatar className="h-10 w-10 border-2 border-white/20">
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