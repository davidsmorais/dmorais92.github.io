import { ThemeProvider } from "@/components/ThemeProvider";

import { ModeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/ui/navbar";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const locale = await getLocale();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<>
			<NextIntlClientProvider messages={messages}>
				<html lang={locale} suppressHydrationWarning>
					<head />
					<Navbar>
						<ModeToggle />
					</Navbar>
					<body className="bg-secondary max-w-svw">
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</body>
				</html>
			</NextIntlClientProvider>
		</>
	);
}
