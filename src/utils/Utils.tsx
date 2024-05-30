import { AlertProps } from "@mui/material";
import { Rating } from "../enums";
import { ReactNode } from "react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import MoodBadIcon from "@mui/icons-material/MoodBad";

export const ratings: Rating[] = [
	Rating.A,
	Rating.B,
	Rating.C,
	Rating.D,
	Rating.F
];

interface RatingDetails {
	title: string;
	severity: AlertProps["severity"];
	description: string;
	icon: ReactNode;
}

export const revealMap: Record<Rating, RatingDetails> = {
	[Rating.A]: {
		title: "A",
		severity: "success",
		description: "Wow. You park like a fucking champ!",
		icon: <CelebrationIcon sx={{ fontSize: "3rem" }} />
	},
	[Rating.B]: {
		title: "B",
		severity: "success",
		description:
			"Good stuff. There's room for improvement, but you got the job done.",
		icon: <NoCrashIcon sx={{ fontSize: "3rem" }} />
	},
	[Rating.C]: {
		title: "C",
		severity: "info",
		description: "Well. I think we both know this could've been better!",
		icon: <PsychologyAltIcon sx={{ fontSize: "3rem" }} />
	},
	[Rating.D]: {
		title: "D",
		severity: "warning",
		description:
			"Yikes! Could it have been worse? Yes. But the bad outweighs the good here.",
		icon: <ThumbDownOffAltIcon sx={{ fontSize: "3rem" }} />
	},
	[Rating.F]: {
		title: "F",
		severity: "error",
		description: "Jesus. Are you an idiot, or just trying to piss people off?",
		icon: <MoodBadIcon sx={{ fontSize: "3rem" }} />
	}
};
