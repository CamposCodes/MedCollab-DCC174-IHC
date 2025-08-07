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

const CaseCard = ({
  id,
  title,
  description,
  status,
  specialty,
  createdAt,
  interactions,
}: CaseCardProps) => {
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
    <Link
      to={`/case/${id}`}
      className="block focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-xl transition-shadow hover:shadow-lg"
      tabIndex={0}
    >
      <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2 border border-blue-200">
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
          <span className="flex items-center gap-1 text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded">
            <Clock className="h-4 w-4" />
            {createdAt}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg leading-tight">{title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end mt-2">
          <span className="flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded">
            <MessageCircle className="w-4 h-4" />
            {interactions}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CaseCard;