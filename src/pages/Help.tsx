import { FileText, Mail, PlayCircle, ChevronDown } from "lucide-react";
import { Phone as PhoneIcon, Clock as ClockIcon } from "lucide-react";
import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";
import { useState } from "react";

const helpOptions = [
	{
		icon: FileText,
		title: "Perguntas Frequentes (FAQ)",
		description: "Encontre respostas para as dúvidas mais comuns.",
		action: "Ver FAQ",
		details: (
			<div>
				<p>
					Acesse nossa seção de perguntas frequentes para encontrar respostas
					rápidas sobre o uso do MedColab.
				</p>
				<a
					href="#"
					className="inline-block mt-3 px-4 py-2 rounded bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors"
					tabIndex={0}
				>
					Ver FAQ
				</a>
			</div>
		),
	},
	{
		icon: Mail,
		title: "Fale Conosco",
		description: "Entre em contato com nossa equipe de suporte.",
		action: "Enviar Mensagem",
		details: (
			<div>
				<p>
					Precisa de ajuda personalizada? Utilize um dos canais abaixo para falar com nossa equipe de suporte.
				</p>
				<div className="space-y-5 mt-6">
					{/* Email */}
					<div className="flex flex-col gap-1">
						<label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
							<Mail className="h-5 w-5 text-primary" />
							<span>Email</span>
						</label>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
							<span className="text-primary break-all text-base font-semibold">
								suporte@medcolab.com
							</span>
							<a
								href="mailto:suporte@medcolab.com"
								className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow hover:bg-primary/90 transition-colors text-center min-w-[140px]"
							>
								Enviar Email
							</a>
						</div>
					</div>
					{/* Telefone */}
					<div className="flex flex-col gap-1">
						<label className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
							<PhoneIcon className="h-5 w-5 text-primary" />
							<span>Telefone</span>
						</label>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
							<span className="text-primary text-base font-semibold">
								(11) 9999-9999
							</span>
							<a
								href="tel:+5511999999999"
								className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-semibold shadow hover:bg-primary/90 transition-colors text-center min-w-[140px]"
							>
								Ligar
							</a>
						</div>
					</div>
					{/* Horário */}
					<div className="flex items-center gap-3 mt-2">
						<ClockIcon className="h-5 w-5 text-primary" />
						<span className="font-medium text-muted-foreground">Horário de Atendimento:</span>
						<span className="ml-2 text-base">Segunda a Sexta, 8h às 18h</span>
					</div>
				</div>
			</div>
		),
	},
	{
		icon: PlayCircle,
		title: "Tutoriais e Guias",
		description: "Aprenda com vídeos e guias passo a passo.",
		action: "Assistir Tutoriais",
		details: (
			<div>
				<p>
					Veja vídeos e tutoriais detalhados para aproveitar ao máximo todas as
					funcionalidades do MedColab.
				</p>
				<a
					href="#"
					className="inline-block mt-3 px-4 py-2 rounded bg-primary text-white font-medium shadow hover:bg-primary/90 transition-colors"
					tabIndex={0}
				>
					Assistir Tutoriais
				</a>
			</div>
		),
	},
];

const Help = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<div className="min-h-screen bg-background pb-20">
			<Header title="Ajuda e Suporte" showBack />

			<main className="p-4 space-y-6 max-w-lg mx-auto">
				{/* Header */}
				<div className="text-center py-8">
					<h2 className="text-2xl font-bold mb-2">Como podemos ajudar?</h2>
					<p className="text-muted-foreground">
						Encontre respostas rápidas, entre em contato com o suporte ou aprenda a
						usar o aplicativo com nossos tutoriais.
					</p>
				</div>

				{/* Help Options - Accordion */}
				<div className="grid gap-4">
					{helpOptions.map((option, idx) => {
						const isOpen = openIndex === idx;
						return (
							<div
								key={idx}
								className={`medical-card transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 ${
									isOpen
										? "shadow-lg bg-primary/5 border-primary"
										: "hover:shadow-medical-elevated"
								}`}
								tabIndex={0}
								aria-expanded={isOpen}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") handleToggle(idx);
								}}
							>
								<button
									className="w-full flex items-center gap-4 p-4 focus:outline-none"
									onClick={() => handleToggle(idx)}
									aria-controls={`help-details-${idx}`}
									aria-expanded={isOpen}
									tabIndex={0}
								>
									<span
										className={`p-3 rounded-lg transition-colors ${
											isOpen ? "bg-primary/20" : "bg-primary/10"
										}`}
									>
										<option.icon
											className={`h-6 w-6 text-primary transition-transform ${
												isOpen ? "scale-110" : ""
											}`}
										/>
									</span>
									<span className="flex-1 text-left">
										<h3 className="font-semibold mb-1 text-base">
											{option.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{option.description}
										</p>
									</span>
									<ChevronDown
										className={`h-5 w-5 ml-2 text-muted-foreground transition-transform duration-200 ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								<div
									id={`help-details-${idx}`}
									className={`transition-all duration-300 px-6 pb-4 text-sm text-muted-foreground ${
										isOpen
											? "max-h-96 opacity-100 pointer-events-auto"
											: "max-h-0 opacity-0 pointer-events-none"
									}`}
									aria-hidden={!isOpen}
								>
									{option.details}
								</div>
							</div>
						);
					})}
					{/* Removido o acordeão de contato separado */}
				</div>
				{/* Version Info */}
				<div className="text-center text-sm text-muted-foreground mt-6">
					<p>MedColab v1.0.0</p>
					<p>© 2024 MedColab. Todos os direitos reservados.</p>
				</div>
			</main>

			<BottomNavigation />
		</div>
	);
};

export default Help;