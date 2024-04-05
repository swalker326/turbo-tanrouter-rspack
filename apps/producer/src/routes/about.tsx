import { createRoute } from "@tanstack/react-router";
import { rootRemoteRoute } from "./root";

export const aboutRoute = createRoute({
	getParentRoute: () => rootRemoteRoute,
	path: "/about",
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div>
			<h3>Remote Nested About</h3>
		</div>
	);
}