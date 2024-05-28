import "./app.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Alert, Snackbar, CssBaseline, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import appStyles from "./App.module.css";
import { useEffect, useRef, useState } from "react";

function App() {
	const [open, setOpen] = useState<boolean>(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>();

	const handleClose = (): void => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
			setOpen(false);
		}
	};

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setOpen(true);
		}, 3000);

		return () => {
			handleClose();
		};
	}, []);

	return (
		<>
			<CssBaseline />
			<Grid className={appStyles.con} spacing={1}>
				<Grid>
					<Typography variant="h1">iRate Parking</Typography>
				</Grid>
			</Grid>
			<Snackbar open={open} onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
					sx={{ width: "100%" }}
				>
					Look at you! Parking <i>and</i> surfing the interwebz!
				</Alert>
			</Snackbar>
		</>
	);
}

export default App;
