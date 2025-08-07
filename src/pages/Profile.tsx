import { useState } from "react";
import { Eye, EyeOff, Bell, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("informacoes");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: "Dr. João Silva",
    email: "joao.silva@ubs.com",
    function: "Cardiologista",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    newQuestions: true,
    caseUpdates: true,
    reminders: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    // Simulate saving profile changes
    console.log("Profile saved:", profileData);
  };

  const handleChangePassword = () => {
    if (profileData.newPassword !== profileData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    // Simulate password change
    console.log("Password changed");
    setProfileData(prev => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const tabs = [
    { id: "informacoes", label: "Informações" },
    { id: "seguranca", label: "Segurança" },
    { id: "notificacoes", label: "Notificações" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Perfil" showBack />
      
      <main className="max-w-xl mx-auto p-2 sm:p-4 space-y-6">
        {/* Profile Header */}
        <div className="medical-card text-center">
          <Avatar className="h-20 w-20 mx-auto mb-4 border-2 border-primary/20">
            <AvatarImage src="" />
            <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
              JS
            </AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-semibold mb-1">Olá, Dr. Silva</h2>
          <p className="text-muted-foreground">Médico Especialista</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-blue-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors
                ${
                  activeTab === tab.id
                    ? "bg-white shadow-sm text-primary border border-primary"
                    : "text-blue-900 hover:bg-blue-200 hover:text-blue-900"
                }`}
              style={{
                borderWidth: activeTab === tab.id ? 1 : 0,
                borderColor: activeTab === tab.id ? "#2563eb" : "transparent",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "informacoes" && (
          <div className="medical-card space-y-6">
            <h3 className="text-lg font-semibold">Informações Pessoais</h3>
            
            <div>
              <Label htmlFor="name" className="text-sm font-medium">Nome Completo</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="medical-input mt-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Endereço de E-mail</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="medical-input mt-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
              />
            </div>
            
            <div>
              <Label htmlFor="function" className="text-sm font-medium">Função</Label>
              <Input
                id="function"
                value={profileData.function}
                onChange={(e) => handleInputChange("function", e.target.value)}
                className="medical-input mt-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
              />
            </div>
            
            <Button onClick={handleSaveProfile} variant="medical" size="medical" className="w-full">
              Salvar Alterações
            </Button>
          </div>
        )}

        {activeTab === "seguranca" && (
          <div className="medical-card space-y-6">
            <h3 className="text-lg font-semibold">Segurança</h3>
            
            <div>
              <Label htmlFor="currentPassword" className="text-sm font-medium">Senha Atual</Label>
              <div className="relative mt-1">
                <Input
                  id="currentPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha atual"
                  value={profileData.currentPassword}
                  onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                  className="medical-input pr-10 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="newPassword" className="text-sm font-medium">Nova Senha</Label>
              <div className="relative mt-1">
                <Input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Sua nova senha"
                  value={profileData.newPassword}
                  onChange={(e) => handleInputChange("newPassword", e.target.value)}
                  className="medical-input pr-10 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmar Nova Senha</Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua nova senha"
                  value={profileData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="medical-input pr-10 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            
            <Button onClick={handleChangePassword} variant="medical" size="medical" className="w-full">
              Alterar Senha
            </Button>
          </div>
        )}

        {activeTab === "notificacoes" && (
          <div className="medical-card space-y-6">
            <h3 className="text-lg font-semibold">Preferências de Notificação</h3>
            <p className="text-sm text-muted-foreground">
              Gerencie como você recebe atualizações sobre seus casos e lembretes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-white">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Novas Perguntas</p>
                    <p className="text-sm text-muted-foreground">Receber notificações sobre novas dúvidas</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.newQuestions}
                  onCheckedChange={(checked) => handleNotificationChange("newQuestions", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-white">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Atualizações de Caso</p>
                    <p className="text-sm text-muted-foreground">Notificações sobre respostas e comentários</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.caseUpdates}
                  onCheckedChange={(checked) => handleNotificationChange("caseUpdates", checked)}
                />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-white">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Lembretes de Prazo</p>
                    <p className="text-sm text-muted-foreground">Alertas sobre casos pendentes</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.reminders}
                  onCheckedChange={(checked) => handleNotificationChange("reminders", checked)}
                />
              </div>
            </div>
            
            <Button variant="medical" size="medical" className="w-full">
              Salvar Alterações
            </Button>
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Profile;