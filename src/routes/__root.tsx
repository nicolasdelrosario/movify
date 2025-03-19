import Navbar from "@/components/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen min-w-screen antialiased">
			<Navbar />
			<Outlet />
		</div>
	),
});
