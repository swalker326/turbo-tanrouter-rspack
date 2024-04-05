import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";

const AboutComponent = () => {
	return (
		<div>
			<h3>About</h3>
		</div>
	);
};

export const aboutRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/about",
	component: AboutComponent,
});
