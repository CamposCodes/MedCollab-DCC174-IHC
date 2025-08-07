import { Stethoscope, GraduationCap, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface UserTypeSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const UserTypeSelector = ({ value, onChange }: UserTypeSelectorProps) => {
  const userTypes = [
    {
      id: "medico",
      label: "Médico",
      icon: Stethoscope,
      description: "Médico Generalista"
    },
    {
      id: "especialista",
      label: "Especialista",
      icon: UserCheck,
      description: "Médico Especialista"
    },
    {
      id: "estudante",
      label: "Estudante",
      icon: GraduationCap,
      description: "Estudante de Medicina"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {userTypes.map(({ id, label, icon: Icon, description }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-200",
            value === id
              ? "border-primary bg-primary text-primary-foreground shadow-medical"
              : "border-border bg-background hover:border-primary/50 hover:bg-primary/5"
          )}
        >
          <Icon className="h-6 w-6 mb-2" />
          <span className="font-medium text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default UserTypeSelector;