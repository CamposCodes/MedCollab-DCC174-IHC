import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";
import CaseCard from "@/components/medical/CaseCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("pendentes");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for cases
  const cases = [
    {
      id: "1",
      title: "Dúvida sobre diagnóstico de pneumonia",
      description: "Paciente com tosse persistente e febre, exames indicam infiltrado pulmonar. Qual o protocolo de tratamento mais adequado?",
      status: "pendente" as const,
      specialty: "Pneumologia",
      createdAt: "15/07/2024",
      interactions: 2,
    },
    {
      id: "2",
      title: "Orientação sobre uso de antibióticos em crianças",
      description: "Qual a dosagem correta de amoxicilina para crianças de 5 anos com otite média aguda?",
      status: "respondida" as const,
      specialty: "Pediatria",
      createdAt: "10/07/2024",
      interactions: 0,
    },
    {
      id: "3",
      title: "Interpretação de exames de sangue complexos",
      description: "Resultados de hemograma com alterações significativas, necessito de segunda opinião para diagnóstico diferencial.",
      status: "devolvida" as const,
      specialty: "Hematologia",
      createdAt: "08/07/2024",
      interactions: 1,
    },
  ];

  const filteredCases = cases.filter(caseItem => {
    const matchesTab = activeTab === "pendentes" ? caseItem.status === "pendente" :
                     activeTab === "respondidas" ? caseItem.status === "respondida" :
                     caseItem.status === "devolvida";
    
    const matchesSearch = caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         caseItem.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: "pendentes", label: "Para Responder", count: cases.filter(c => c.status === "pendente").length },
    { id: "respondidas", label: "Respondidas", count: cases.filter(c => c.status === "respondida").length },
    { id: "devolvidas", label: "Devolvidas", count: cases.filter(c => c.status === "devolvida").length },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="p-4 space-y-6">
        {/* New Question Button */}
        <Button
          asChild
          variant="medical"
          size="medical"
          className="w-full"
        >
          <Link to="/case/new">
            <Plus className="h-5 w-5 mr-2" />
            Registrar Nova Dúvida
          </Link>
        </Button>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar casos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="medical-input pl-10"
          />
        </div>

        {/* Tabs */}
        <div className="flex bg-muted p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cases List */}
        <div className="space-y-4">
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery 
                  ? "Nenhum caso encontrado para sua busca."
                  : `Nenhum caso ${activeTab === "pendentes" ? "pendente" : activeTab === "respondidas" ? "respondido" : "devolvido"} encontrado.`
                }
              </p>
            </div>
          )}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Dashboard;