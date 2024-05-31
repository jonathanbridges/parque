import CarCrashIcon from "@mui/icons-material/CarCrash";
import { Button, Grid, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";

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
		}, 1000);

		return () => {
			handleClose();
		};
	}, []);

	return (
		<Slide direction="left" in={checked} timeout={{ enter: 750, exit: 500 }}>
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
