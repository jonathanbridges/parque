import { Box } from "@mui/material";
import styles from "./BackgroundBox.module.css";
import { PropsWithChildren } from "react";

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
