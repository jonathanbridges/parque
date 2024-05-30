import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";
import InboxIcon from "@mui/icons-material/Inbox";
import { Rating } from "../../enums";

interface Props {
	rating: Rating;
}

/**
 *
 * @returns the hashed rating in a list item for the SnarkDrawer
 */
export default function SnarkListItem({ rating }: Props) {
	return (
		<Link to={`/ratings/${rating}`}>
			<ListItem disableGutters>
				<ListItemButton>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary={rating} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
}
