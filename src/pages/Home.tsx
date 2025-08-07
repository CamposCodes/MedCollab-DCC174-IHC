import Header from "@/components/medical/Header";
import BottomNavigation from "@/components/medical/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Users, HelpCircle } from "lucide-react";

const features = [
	{
		icon: <FileText className="h-7 w-7 text-primary" />,
		title: "Casos Clínicos",
		description:
			"Registre, acompanhe e compartilhe casos clínicos de forma segura e colaborativa.",
	},
	{
		icon: <Users className="h-7 w-7 text-primary" />,
		title: "Colaboração Médica",
		description:
			"Conecte-se com especialistas de diversas áreas para discutir diagnósticos e condutas.",
	},
	{
		icon: <HelpCircle className="h-7 w-7 text-primary" />,
		title: "Suporte e Aprendizado",
		description:
			"Acesse tutoriais, FAQs e suporte dedicado para aprimorar sua experiência.",
	},
];

const Home = () => (
	<div className="min-h-screen bg-background pb-20 flex flex-col">
		<Header title="Bem-vindo ao MedColab" showNotifications={false} />
		<main className="flex-1 flex flex-col justify-center items-center max-w-xl mx-auto px-4 py-8 space-y-8">
			<section className="text-center space-y-3">
				<h1 className="text-3xl font-bold text-primary">MedColab</h1>
				<p className="text-muted-foreground text-base">
					Plataforma colaborativa para médicos registrarem dúvidas, compartilhar
					conhecimento e obter suporte especializado.
				</p>
			</section>

			<section className="grid gap-6 w-full">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className="flex items-start gap-4 bg-white rounded-xl shadow p-5 border border-blue-100"
					>
						<div>{feature.icon}</div>
						<div>
							<h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
							<p className="text-sm text-muted-foreground">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</section>

			<div className="text-center mt-6 w-full">
				<Button
					asChild
					variant="medical"
					size="lg"
					className="px-8 py-3 text-base font-semibold w-full"
				>
					<Link to="/dashboard">Acessar Plataforma</Link>
				</Button>
			</div>
		</main>
		<BottomNavigation />
	</div>
);

export default Home;
// Apenas certifique-se de que a rota "/home" aponte para este componente no seu arquivo de rotas, por exemplo:

// No seu arquivo de rotas (exemplo: App.tsx ou routes/index.tsx):
// import Home from "@/pages/Home";
// ...
// <Route path="/home" element={<Home />} />
// ...

// Se quiser remover a rota "/" para Home, altere para:
// <Route path="/" element={<Dashboard />} />
// <Route path="/home" element={<Home />} />

// O componente Home permanece igual.
