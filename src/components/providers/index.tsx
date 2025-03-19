import ReactScanProvider from "@/components/providers/react-scan-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { env } from "@/config/env";

type ProvidersProps = {
	children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
	return (
		<>
			<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
				{env.NODE_ENV === "development" && <ReactScanProvider />}
				{children}
			</ThemeProvider>
		</>
	);
}

export default Providers;
