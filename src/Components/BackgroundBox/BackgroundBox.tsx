import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import styles from "./BackgroundBox.module.css";

/**
 *
 * @returns the main background element
 */
export default function BackgroundBox({ children }: PropsWithChildren) {
	return (
		<Box component="main" className={styles.con}>
			{children}
		</Box>
	);
}
