import { Alert, Snackbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

/**
 *
 * @returns a snarky message using the Material UI Snackbar @link https://mui.com/material-ui/react-snackbar/
 */
export default function Snarkbar() {
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
		}, 2500);

		return () => {
			handleClose();
		};
	}, []);

	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			autoHideDuration={3500}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert
				onClose={handleClose}
				severity="success"
				variant="filled"
				sx={{ width: "100%" }}
			>
				Look at you! Parking <i>and</i> surfing the interwebz!
			</Alert>
		</Snackbar>
	);
}
