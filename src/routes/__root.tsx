import Navbar from "@/components/navbar";
import Providers from "@/components/providers";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen min-w-screen antialiased">
			<Navbar />
			<Outlet />
			<Providers />
		</div>
	),
});
