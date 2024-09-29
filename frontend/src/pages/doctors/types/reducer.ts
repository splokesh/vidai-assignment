import { Doctor } from "./Doctor";

export interface DoctorsState {
	doctors: Doctor[];
	searchKeyword: string;
	appliedFilters: string[];
	loading: boolean;
	error: string | null;
}
