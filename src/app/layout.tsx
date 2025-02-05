import { ThemeProvider } from "@/components/ThemeProvider";

import { Navbar } from "@/components/ui/navbar";

import { RetroGrid } from "@/components/ui/retro-grid";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import FlexDiv from "@/components/FlexDiv";
import { TypographySmall } from "@/components/Typo";

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const locale = await getLocale();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	return (
		<>
			<html lang={locale} suppressHydrationWarning>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<head />
						<body className="bg-secondary max-w-svw">
							<RetroGrid
								darkLineColor="#6ea"
								lightLineColor="#ed199f"
								angle={10}
								blur="blur-xs"
							/>
							<RetroGrid
								darkLineColor="#ed199f"
								lightLineColor="#66eeaa"
								angle={30}
								blur="blur-xs"
							/>
							<Navbar />
							{children}
							<footer>
								<FlexDiv>
									<TypographySmall>
										© {new Date().getFullYear()} - Made with ❤️ by {""}
										<a href="davidmorais.com">David Morais</a>
									</TypographySmall>
								</FlexDiv>
							</footer>
						</body>
					</ThemeProvider>
				</NextIntlClientProvider>
			</html>
		</>
	);
}
