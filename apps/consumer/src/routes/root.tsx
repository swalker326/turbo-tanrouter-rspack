import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const RootComponent = () => {
	return (
		<div>
			<h1>Consumer Root</h1>
			<h2 style={{ fontWeight: 200 }}>I'm kind of like the app shell</h2>
			<div style={{ display: "flex", gap: "12px" }}>
				<Link to="/">Index</Link>
				<Link to="/about">About</Link>
				{/* @ts-expect-error the router doesn't know about routes loaded from a remote...yet */}
				<Link to="/ui-producer">Remote Link</Link>
			</div>
			<Outlet />
		</div>
	);
};

export const rootRoute = createRootRoute({
	component: RootComponent,
});
