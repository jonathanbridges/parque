import { Box, List } from "@mui/material";
import SnarkListItem from "../SnarkListItem/SnarkListItem";
import { Rating } from "../../enums";
import { ratings } from "../../utils/Utils";

export default function SnarkDrawer() {
	return (
		<Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
			<nav aria-label="main mailbox folders">
				<List>
					{ratings.map((rating: Rating) => (
						<SnarkListItem key={rating} rating={rating} />
					))}
				</List>
			</nav>
		</Box>
	);
}
