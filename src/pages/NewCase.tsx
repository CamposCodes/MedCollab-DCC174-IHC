import { useState } from "react";
import { Upload, X, FileText, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";
import { useNavigate } from "react-router-dom";

const NewCase = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    specialty: "",
    patientAge: "",
    patientGender: "",
    description: "",
  });
  const [attachments, setAttachments] = useState<File[]>([]);

  const specialties = [
    "Cardiologia", "Dermatologia", "Endocrinologia", "Gastroenterologia",
    "Hematologia", "Neurologia", "Oncologia", "Pediatria", "Pneumologia",
    "Psiquiatria", "Radiologia", "Urologia"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate case submission
    navigate("/dashboard");
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className="h-4 w-4" />;
    }
    return <FileText className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Header title="Nova Dúvida" showBack />
      
      <main className="p-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Specialty Selection */}
          <div className="medical-card">
            <h3 className="text-lg font-semibold mb-4">Especialidade</h3>
            <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
              <SelectTrigger className="medical-input">
                <SelectValue placeholder="Selecione a especialidade" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Patient Data */}
          <div className="medical-card">
            <h3 className="text-lg font-semibold mb-4">Dados do Paciente (Anônimos)</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age" className="text-sm font-medium">Idade</Label>
                <Input
                  id="age"
                  placeholder="Ex: 45"
                  value={formData.patientAge}
                  onChange={(e) => handleInputChange("patientAge", e.target.value)}
                  className="medical-input mt-1"
                />
              </div>
              <div>
                <Label htmlFor="gender" className="text-sm font-medium">Sexo</Label>
                <Select value={formData.patientGender} onValueChange={(value) => handleInputChange("patientGender", value)}>
                  <SelectTrigger className="medical-input mt-1">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Case Description */}
          <div className="medical-card">
            <h3 className="text-lg font-semibold mb-4">Descrição do Caso</h3>
            <Textarea
              placeholder="Descreva o caso clínico detalhadamente..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="medical-textarea"
              rows={6}
            />
          </div>

          {/* File Attachments */}
          <div className="medical-card">
            <h3 className="text-lg font-semibold mb-4">Anexar Arquivos (Imagens, PDFs)</h3>
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="file-upload"
                multiple
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Clique para anexar ou arraste arquivos
                </span>
              </label>
            </div>

            {/* Attached Files */}
            {attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-primary/10 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {getFileIcon(file)}
                      <span className="text-sm font-medium truncate">{file.name}</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeAttachment(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="medical" size="medical" className="w-full">
            Enviar Caso
          </Button>
        </form>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default NewCase;