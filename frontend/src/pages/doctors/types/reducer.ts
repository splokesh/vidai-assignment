import { Doctor } from "./Doctor";

export interface DoctorsState {
	doctors: Doctor[];
	total: number;
	page: number;
	limit: number;
	searchKeyword: string;
	specialty: string[];
	location: string[];
	loading: boolean;
	error: string | null;
	totalPages: number;
}
