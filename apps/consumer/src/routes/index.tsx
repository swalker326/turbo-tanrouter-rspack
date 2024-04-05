import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./root";

const IndexComponent = () => {
	return (
		<div>
			<h3>Index Route</h3>
		</div>
	);
};

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: IndexComponent,
});
