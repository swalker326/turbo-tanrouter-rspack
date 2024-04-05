import { createRoute, createRouter } from "@tanstack/react-router";
import { indexRoute } from "./routes";
import { aboutRoute } from "./routes/about";
import { rootRoute } from "./routes/root";
import { routes } from "producer/routes";

// const routeObjectToRoute = (routeObject: typeof routes) => {
// 	return createRoute({
// 		getParentRoute: () => rootRoute,
// 		path: routeObject.path,
// 		component: routeObject.component,
// 	});
// };

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, routes]);

export const router = createRouter({ routeTree, defaultPreload: "intent" });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
