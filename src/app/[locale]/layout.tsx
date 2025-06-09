import type { Metadata } from "next";
import Header from "@/components/Header";
import { balooBhaina2, tajawal } from "@/lib/fonts";
import "@/styles/globals.css";
import { NextIntlClientProvider, hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Best World Emballage",
	description: "Best World Emballage",
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);

	return (
		<html lang={locale} className="scroll-smooth">
			<body className={`${balooBhaina2.variable} ${tajawal.variable}`}>
				<NextIntlClientProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
