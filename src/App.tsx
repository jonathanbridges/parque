import "./app.css";
import { Drawer, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Snarkbar from "./Components/Snarkbar/Snarkbar";

import Snarkbutton from "./Components/Snarkbutton/Snarkbutton";
import { useState } from "react";
import SnarkDrawer from "./Components/SnarkDrawer/SnarkDrawer";
import BackgroundBox from "./Components/BackgroundBox/BackgroundBox";

/**
 *
 * @returns the main layout, css reset, and the snarkbar
 */
export default function App() {
	const [showDrawer, setShowDrawer] = useState<boolean>(false);

	const toggleDrawer = (): void => {
		setShowDrawer((show: boolean) => !show);
	};

	return (
		<>
			<BackgroundBox>
				<Grid spacing={1}>
					<Grid>
						<Typography variant="h1">iRate Parking</Typography>
					</Grid>
					<Snarkbutton toggleDrawer={toggleDrawer} />
				</Grid>
				<Snarkbar />
				<Drawer open={showDrawer} onClose={toggleDrawer}>
					<SnarkDrawer />
				</Drawer>
			</BackgroundBox>
		</>
	);
}
