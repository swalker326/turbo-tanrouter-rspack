import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

const el = document.getElementById("root");

if (!el) {
	throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(el);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
