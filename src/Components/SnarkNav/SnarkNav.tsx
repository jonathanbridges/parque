import {
	Paper,
	BottomNavigation,
	BottomNavigationAction,
	createTheme,
	ThemeProvider
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Rating } from "../../enums";
import { revealMap } from "../../utils/Utils";

interface Props {
	rating: Rating;
}

const theme = createTheme({
	components: {
		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					color: "white"
				}
			}
		}
	}
});

/**
 *
 * @returns the bottom nav component to get back to the home page
 */
export default function SnarkNav({ rating }: Props) {
	const { severity } = revealMap[rating];

	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0
			}}
			elevation={3}
		>
			<ThemeProvider theme={theme}>
				<BottomNavigation showLabels sx={{ bgcolor: `${severity}.main` }}>
					<BottomNavigationAction
						label="Home"
						icon={<HomeIcon />}
						component={Link}
						to="/"
						value="Home"
					/>
				</BottomNavigation>
			</ThemeProvider>
		</Paper>
	);
}
