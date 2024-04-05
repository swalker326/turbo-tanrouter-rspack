import {
	Link,
	Outlet,
	createLazyRoute,
	createRoute,
} from "@tanstack/react-router";
import { rootRoute } from "consumer/root";

// export const rootRemoteRoute = {
// 	path: "/ui-producer",
// 	component: RootComponent,
// };

export const rootRemoteRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/ui-producer",
	component: RootComponent,
});

function RootComponent() {
	return (
		<div>
			<h3>Remote Root Route</h3>
			<Link to="/ui-producer/about">About</Link>
			<Outlet />
		</div>
	);
}
