import CssBaseline from "@mui/material/CssBaseline";
import { useParams } from "react-router-dom";
import BackgroundBox from "../Components/BackgroundBox/BackgroundBox";
import SnarkAlert from "../Components/SnarkAlert/SnarkAlert";
import SnarkNav from "../Components/SnarkNav/SnarkNav";
import { Rating } from "../enums";

export default function Ratings() {
	const { ratingId } = useParams();

	return (
		<>
			<CssBaseline />
			<BackgroundBox>
				<SnarkAlert rating={ratingId as Rating} />
				<SnarkNav rating={ratingId as Rating} />
			</BackgroundBox>
		</>
	);
}
