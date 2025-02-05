import { ThemeProvider } from "@/components/ThemeProvider";

import { Navbar } from "@/components/ui/navbar";

import { RetroGrid } from "@/components/ui/retro-grid";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";
import FlexDiv from "@/components/FlexDiv";
import { TypographySmall } from "@/components/Typo";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const caskaydiaCode = localFont({
	src: "./fonts/CCNF.ttf",
	display: "swap",
	variable: "--font-caskaydia",
});

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const locale = await getLocale();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();
	const year = new Date().getFullYear();
	return (
		<>
			<html
				lang={locale}
				suppressHydrationWarning
				className={`${caskaydiaCode.className}`}
			>
				<head />
				<body className="bg-secondary max-w-svw">
					<NextIntlClientProvider messages={messages}>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
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
										© {year} - Made with ❤️ by {""}
										<a href="davidmorais.com">David Morais</a>
									</TypographySmall>
								</FlexDiv>
							</footer>
						</ThemeProvider>
					</NextIntlClientProvider>
				</body>
			</html>
		</>
	);
}
