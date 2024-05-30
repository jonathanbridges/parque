import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import Ratings from "./routes/ratings.tsx";
import Root from "./routes/root";

// set up routes using react-router
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />
	},
	{
		path: "ratings/:ratingId",
		element: <Ratings />,
		errorElement: <ErrorPage />
	}
]);

/**
 * Entry point file
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
