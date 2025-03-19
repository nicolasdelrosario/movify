import { Clapperboard } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";
import ThemeToggle from "../theme-toggle";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function Navbar() {
	return (
		<div className="border-gray-200 border-b dark:border-gray-700 ">
			<MaxWidthWrapper className="py-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Clapperboard className="mr-2 font-semibold" />
						<h1 className="font-semibold text-xl">Movify</h1>
					</div>
					<div className="flex h-8 items-center space-x-4 text-sm">
						<Button>Registrarse</Button>
						<Button variant={"outline"}>Iniciar sesión</Button>
						<Separator orientation="vertical" />
						<ThemeToggle />
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}

export default Navbar;
