import { MessageCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CaseCardProps {
  id: string;
  title: string;
  description: string;
  status: "pendente" | "respondida" | "devolvida";
  specialty: string;
  createdAt: string;
  interactions: number;
}

const CaseCard = ({ id, title, description, status, specialty, createdAt, interactions }: CaseCardProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "pendente":
        return {
          label: "PENDENTE",
          className: "bg-warning text-warning-foreground",
        };
      case "respondida":
        return {
          label: "RESPONDIDA",
          className: "bg-success text-success-foreground",
        };
      case "devolvida":
        return {
          label: "DEVOLVIDA",
          className: "bg-destructive text-destructive-foreground",
        };
      default:
        return {
          label: "PENDENTE",
          className: "bg-warning text-warning-foreground",
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <Link to={`/case/${id}`}>
      <div className="medical-card hover:shadow-medical-elevated transition-shadow cursor-pointer">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              statusConfig.className
            )}
          >
            {statusConfig.label}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="h-3 w-3" />
            <span>{createdAt}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground leading-tight">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-sm font-medium text-primary">{specialty}</span>
            {interactions > 0 && (
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MessageCircle className="h-3 w-3" />
                <span>{interactions}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;