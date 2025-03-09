import { Clapperboard } from "lucide-react";
import MaxWidthWrapper from "../max-width-wrapper";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="border-gray-200 border-b ">
			<MaxWidthWrapper className="py-2">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Clapperboard className="mr-2 font-semibold" />
						<h1 className="font-semibold text-xl">Movify</h1>
					</div>
					<div>
						<Button size={"sm"}>Registrarse</Button>
						<Button variant={"outline"} size={"sm"} className="ml-2">
							Iniciar sesión
						</Button>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Navbar;
