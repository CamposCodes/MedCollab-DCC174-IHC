import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserTypeSelector from "@/components/medical/UserTypeSelector";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("medico");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    // Simulate registration - in real app, send to backend
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">MedColab</h1>
          <p className="text-muted-foreground">Plataforma de Colaboração Médica</p>
        </div>

        {/* Register Card */}
        <div className="medical-card">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">Crie Sua Conta</h2>
            <p className="text-muted-foreground">Junte-se à nossa comunidade médica</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Eu sou um(a):</Label>
              <UserTypeSelector value={userType} onChange={setUserType} />
            </div>

            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium">
                Nome Completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="medical-input mt-1"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Endereço de E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu endereço de e-mail"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="medical-input mt-1"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium">
                Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="medical-input pr-10"
                  required
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

            {/* Confirm Password Field */}
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar Senha
              </Label>
              <div className="relative mt-1">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="medical-input pr-10"
                  required
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

            {/* Register Button */}
            <Button type="submit" variant="medical" size="medical" className="w-full">
              Cadastrar
            </Button>

            {/* Login Link */}
            <div className="text-center text-sm text-muted-foreground">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                Entrar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;