import MaxWidthWrapper from "@/components/max-width-wrapper";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

export function Index() {
	return (
		<MaxWidthWrapper>
			<h1>Hola mundo! Esto es Movify:3</h1>
		</MaxWidthWrapper>
	);
}
