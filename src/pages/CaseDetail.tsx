import { useState } from "react";
import { FileText, Image, Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";
import { useParams } from "react-router-dom";

const CaseDetail = () => {
  const { id } = useParams();
  const [response, setResponse] = useState("");
  
  // Mock case data
  const caseData = {
    id: "2023-001",
    status: "AGUARDANDO FEEDBACK",
    specialty: "Cardiologia",
    patient: "45 anos, Masculino",
    description: "Paciente com histórico de dor torácica atípica, dispneia aos esforços e palpitações. ECG com alterações inespecíficas. Ecocardiograma sem alterações estruturais significativas. Necessita de avaliação para descartar causas cardíacas e orientação sobre exames complementares.",
    attachments: [
      { name: "exame_ecg.pdf", type: "pdf" },
      { name: "relatorio_medico.docx", type: "document" }
    ],
    messages: [
      {
        id: 1,
        sender: "Dr. João (Você)",
        time: "10:30 AM, 15 Fev",
        content: "Prezado especialista, gostaria de uma segunda opinião sobre este caso. Quais exames adicionais seriam recomendados para investigar a dor torácica?",
        isUser: true
      },
      {
        id: 2,
        sender: "Dr. Ana Silva (Especialista)",
        time: "11:00 AM, 15 Fev",
        content: "Olá Dr. João. Para a dor torácica atípica, sugiro considerar um teste ergométrico ou cintilografia miocárdica para avaliar isquemia. Também seria útil um Holter 24h para as palpitações. Mantenha-me atualizada.",
        isUser: false
      }
    ]
  };

  const quickResponses = [
    "Obrigado pela orientação.",
    "Vou solicitar os exames.",
    "Tenho uma dúvida sobre..."
  ];

  const handleSubmitResponse = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      // In real app, send response to backend
      setResponse("");
    }
  };

  const getFileIcon = (type: string) => {
    if (type === "pdf" || type === "document") {
      return <FileText className="h-4 w-4 text-primary" />;
    }
    return <Image className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Detalhes do Caso" showBack />
      
      <main className="px-2 sm:px-4 md:px-8 p-4 space-y-6">
        {/* Case Information */}
        <div className="medical-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Caso #{caseData.id}</h2>
            <span className="px-3 py-1 bg-warning text-warning-foreground rounded-full text-xs font-medium">
              {caseData.status}
            </span>
          </div>
          
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-muted-foreground">ESPECIALIDADE:</span>
              <p className="text-sm font-medium">{caseData.specialty}</p>
            </div>
            
            <div>
              <span className="text-sm font-medium text-muted-foreground">PACIENTE:</span>
              <p className="text-sm font-medium">{caseData.patient}</p>
            </div>
            
            <div>
              <span className="text-sm font-medium text-muted-foreground">DESCRIÇÃO:</span>
              <p className="text-sm leading-relaxed mt-1">{caseData.description}</p>
            </div>
            
            {caseData.attachments.length > 0 && (
              <div>
                <span className="text-sm font-medium text-muted-foreground">ANEXOS:</span>
                <div className="mt-2 space-y-2">
                  {caseData.attachments.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors"
                    >
                      {getFileIcon(file.type)}
                      <span className="text-sm font-medium text-primary">{file.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Communication History */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Histórico de Comunicação</h3>
          <div className="space-y-4">
            {caseData.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium opacity-90">{message.sender}</span>
                    <span className="text-xs opacity-70">{message.time}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Response Actions */}
        <div>
          <h4 className="text-base font-medium mb-3">Sua Resposta</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {quickResponses.map((quickResponse, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => setResponse(quickResponse)}
                className="text-xs"
              >
                {quickResponse}
              </Button>
            ))}
          </div>
        </div>

        {/* Response Form */}
        <form onSubmit={handleSubmitResponse} className="space-y-4">
          <Textarea
            placeholder="Digite sua resposta aqui..."
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            className="medical-textarea"
            rows={4}
          />
          
          {/* File Upload */}
          <div className="border-2 border-dashed border-border rounded-lg p-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span className="text-sm">Anexar arquivos à resposta</span>
            </button>
          </div>
          
          <Button type="submit" variant="medical" size="medical" className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Enviar Resposta
          </Button>
        </form>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default CaseDetail;