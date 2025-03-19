import { type JSX, useEffect } from "react";
import { scan } from "react-scan";

function ReactScanProvider(): JSX.Element {
	useEffect(() => {
		scan({
			enabled: true,
		});
	}, []);

	return <></>;
}

export default ReactScanProvider;
