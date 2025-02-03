import "./globals.css";
import { ModeToggle } from "@/components/ThemeToggle";
export default function Page() {
	return (
		<body className="bg-primary">
			<div className="m-5">
				<ModeToggle />
				<h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					The People of the Kingdom
				</h2>
			</div>
		</body>
	);
}
