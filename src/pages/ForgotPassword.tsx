import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending reset email
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="medical-card text-center">
            <h2 className="text-2xl font-semibold mb-4">Email Enviado</h2>
            <p className="text-muted-foreground mb-6">
              Enviamos um link de recuperação de senha para <strong>{email}</strong>. 
              Verifique sua caixa de entrada e siga as instruções.
            </p>
            <Button asChild variant="medical" size="medical" className="w-full">
              <Link to="/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">MedColab</h1>
          <p className="text-muted-foreground">Plataforma de Colaboração Médica</p>
        </div>

        {/* Forgot Password Card */}
        <div className="medical-card">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">Recuperar Senha</h2>
            <p className="text-muted-foreground">
              Digite seu e-mail ou nome de usuário para receber um link de recuperação de senha.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                E-mail ou Nome de Usuário
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com ou nome de usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="medical-input mt-1"
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="medical" size="medical" className="w-full">
              Enviar Link de Recuperação
            </Button>

            {/* Back to Login */}
            <div className="text-center">
              <Link
                to="/login"
                className="text-primary hover:text-primary-hover text-sm font-medium transition-colors inline-flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Voltar ao Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;