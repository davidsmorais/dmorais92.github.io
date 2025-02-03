import { ModeToggle } from "@/components/ThemeToggle";
export default function Page() {
	return (
		<body className="bg-secondary">
			<main className="m-5 p-2">
				<ModeToggle />
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					The People of the Kingdom
				</h2>
			</main>
		</body>
	);
}
