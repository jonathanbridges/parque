import { Alert, AlertTitle, Typography } from "@mui/material";
import { Rating } from "../../enums";
import { revealMap } from "../../utils/Utils";

interface Props {
	rating: Rating;
}

/**
 *
 * @returns a snarky alert revealing the letter grade
 */
export default function SnarkAlert({ rating }: Props) {
	const { severity, title, description, icon } = revealMap[rating];

	return (
		<Alert
			variant="filled"
			severity={severity}
			sx={{ alignItems: "center" }}
			icon={icon}
		>
			<AlertTitle sx={{ fontSize: "3rem", marginBottom: "0px" }}>
				{title}
			</AlertTitle>
			<Typography
				component={"span"}
				sx={{ fontSize: "1.25rem", fontWeight: "medium" }}
			>
				{description}
			</Typography>
		</Alert>
	);
}
