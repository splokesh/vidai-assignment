import { useContext } from "react";
import { DoctorsContext } from "../context/DoctorsContext";

export const useDoctors = () => {
	const context = useContext(DoctorsContext);
	if (context === undefined) {
		throw new Error("useDoctors must be used within a DoctorsProvider");
	}
	return context;
};
