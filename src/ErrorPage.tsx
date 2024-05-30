import { Link, useRouteError } from "react-router-dom";

/**
 *
 * @returns an error page
 */
export default function ErrorPage() {
	// TODO make this snarkier
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>
					{(error as { statusText?: string; message?: string }).statusText ??
						(error as { message: string }).message}
				</i>
			</p>
			<Link to={`/`}>Back Home</Link>
		</div>
	);
}
