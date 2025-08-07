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

      <main className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 space-y-8 mt-6 mb-8 border border-blue-100"
        >
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-primary mb-1">Registrar Nova Dúvida</h2>
            <p className="text-muted-foreground text-sm">
              Preencha os campos abaixo para registrar um novo caso clínico. Os dados do paciente são anônimos.
            </p>
          </div>

          {/* Specialty Selection */}
          <div>
            <Label className="block mb-2 font-semibold text-blue-900">Especialidade</Label>
            <Select value={formData.specialty} onValueChange={(value) => handleInputChange("specialty", value)}>
              <SelectTrigger className="medical-input border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors">
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
          <div>
            <Label className="block mb-2 font-semibold text-blue-900">Dados do Paciente (Anônimos)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age" className="text-sm font-medium">Idade</Label>
                <Input
                  id="age"
                  placeholder="Ex: 45"
                  value={formData.patientAge}
                  onChange={(e) => handleInputChange("patientAge", e.target.value)}
                  className="medical-input mt-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
                  type="number"
                  min={0}
                  max={120}
                />
              </div>
              <div>
                <Label htmlFor="gender" className="text-sm font-medium">Sexo</Label>
                <Select value={formData.patientGender} onValueChange={(value) => handleInputChange("patientGender", value)}>
                  <SelectTrigger className="medical-input mt-1 border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors">
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
          <div>
            <Label className="block mb-2 font-semibold text-blue-900">Descrição do Caso</Label>
            <Textarea
              placeholder="Descreva o caso clínico detalhadamente..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              className="medical-textarea border-blue-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-colors"
              rows={6}
              required
            />
            <span className="text-xs text-muted-foreground mt-1 block">
              Não inclua informações que possam identificar o paciente.
            </span>
          </div>

          {/* File Attachments */}
          <div>
            <Label className="block mb-2 font-semibold text-blue-900">Anexar Arquivos</Label>
            <div className="border-2 border-dashed border-blue-200 rounded-lg p-6 text-center hover:border-blue-400 transition-colors bg-blue-50/30">
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
                <Upload className="h-8 w-8 text-blue-400" />
                <span className="text-sm text-blue-700">
                  Clique para anexar ou arraste arquivos (imagens, PDFs)
                </span>
              </label>
            </div>
            {/* Attached Files */}
            {attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100"
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
          <Button
            type="submit"
            variant="medical"
            size="lg"
            className="w-full mt-2 text-base font-semibold"
          >
            Enviar Caso
          </Button>
        </form>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default NewCase;