import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UserTypeSelector from "@/components/medical/UserTypeSelector";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("medico");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, validate credentials
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

        {/* Login Card */}
        <div className="medical-card">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2">Bem-vindo de volta!</h2>
            <p className="text-muted-foreground">Entre em sua conta para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* User Type Selection */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Eu sou um(a):</Label>
              <UserTypeSelector value={userType} onChange={setUserType} />
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email ou Usuário
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu email ou nome de usuário"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Login Button */}
            <Button type="submit" variant="medical" size="medical" className="w-full">
              Entrar
            </Button>

            {/* Links */}
            <div className="text-center space-y-2">
              <Link
                to="/forgot-password"
                className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
              >
                Esqueceu sua senha?
              </Link>
              <div className="text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:text-primary-hover font-medium transition-colors"
                >
                  Cadastre-se
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;