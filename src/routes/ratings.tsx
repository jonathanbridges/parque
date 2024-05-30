import CssBaseline from "@mui/material/CssBaseline";
import BackgroundBox from "../Components/BackgroundBox/BackgroundBox";
import SnarkAlert from "../Components/SnarkAlert/SnarkAlert";
import { useParams } from "react-router-dom";
import { Rating } from "../enums";

export default function Ratings() {
	const { ratingId } = useParams();

	return (
		<>
			<CssBaseline />
			<BackgroundBox>
				<SnarkAlert rating={ratingId as Rating} />
			</BackgroundBox>
		</>
	);
}
