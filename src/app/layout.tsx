import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const description =
	"Custom job, inspection and compliance software for trade businesses in South East Queensland. No per-user fees, ever. Fixed quote inside a week, live in weeks, from $12k. You own the code and database outright. Built in Brisbane.";

export const metadata: Metadata = {
	metadataBase: new URL("https://zeltta.com.au"),
	title: "Zeltta — Custom software your trade business owns outright",
	description,
	icons: {
		icon: "/assets/logo-512.png",
		apple: "/assets/logo-512.png",
	},
	openGraph: {
		type: "website",
		url: "https://zeltta.com.au/",
		title: "Zeltta — Custom software your trade business owns outright",
		description,
		images: ["/assets/logo-512.png"],
	},
	twitter: {
		card: "summary",
	},
};

export const viewport: Viewport = {
	themeColor: "#0c0a09",
};

const RootLayout = (props: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-stone-50 font-sans text-stone-800 antialiased">
				{props.children}
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
