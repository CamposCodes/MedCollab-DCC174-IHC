import { FileText, Mail, PlayCircle } from "lucide-react";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";

const Help = () => {
  const helpOptions = [
    {
      icon: FileText,
      title: "Perguntas Frequentes (FAQ)",
      description: "Encontre respostas para as dúvidas mais comuns.",
      action: "Ver FAQ"
    },
    {
      icon: Mail,
      title: "Fale Conosco",
      description: "Entre em contato com nossa equipe de suporte.",
      action: "Enviar Mensagem"
    },
    {
      icon: PlayCircle,
      title: "Tutoriais e Guias",
      description: "Aprenda com vídeos e guias passo a passo.",
      action: "Assistir Tutoriais"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Ajuda e Suporte" showBack />
      
      <main className="p-4 space-y-6">
        {/* Header */}
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-2">Como podemos ajudar?</h2>
          <p className="text-muted-foreground">
            Encontre respostas rápidas, entre em contato com o suporte ou aprenda a usar o 
            aplicativo com nossos tutoriais.
          </p>
        </div>

        {/* Help Options */}
        <div className="grid gap-4">
          {helpOptions.map((option, index) => (
            <div 
              key={index}
              className="medical-card hover:shadow-medical-elevated transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="medical-card">
          <h3 className="font-semibold mb-4">Outras Formas de Contato</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium">Email:</span>
              <span className="ml-2 text-primary">suporte@medcolab.com</span>
            </div>
            <div>
              <span className="font-medium">Telefone:</span>
              <span className="ml-2">(11) 9999-9999</span>
            </div>
            <div>
              <span className="font-medium">Horário de Atendimento:</span>
              <span className="ml-2">Segunda a Sexta, 8h às 18h</span>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="text-center text-sm text-muted-foreground">
          <p>MedColab v1.0.0</p>
          <p>© 2024 MedColab. Todos os direitos reservados.</p>
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Help;