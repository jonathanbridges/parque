import { Slide, Grid, Button } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import CarCrashIcon from "@mui/icons-material/CarCrash";

interface Props {
	toggleDrawer: () => void;
}

/**
 *
 * @returns a snarky CTA button for people to find out their rating
 */
export default function Snarkbutton({ toggleDrawer }: Props) {
	const [checked, setChecked] = useState<boolean>(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>();

	const handleClose = (): void => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
			setChecked(false);
		}
	};

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setChecked(true);
		}, 5000);

		return () => {
			handleClose();
		};
	}, []);

	return (
		<Slide direction="left" in={checked}>
			<Grid>
				<Button
					variant="contained"
					color="primary"
					startIcon={<CarCrashIcon />}
					onClick={toggleDrawer}
				>
					Click to find out how you did!
				</Button>
			</Grid>
		</Slide>
	);
}