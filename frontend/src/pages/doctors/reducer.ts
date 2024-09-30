import { DoctorsState, DoctorsAction, DoctorsActionType } from "./types";

export const initialState: DoctorsState = {
	doctors: [],
	total: 0,
	page: 1,
	limit: 10,
	searchKeyword: "",
	specialty: [],
	location: [],
	totalPages: 0,
	loading: true,
	error: null,
};

export function doctorsReducer(
	state: DoctorsState,
	action: DoctorsAction
): DoctorsState {
	switch (action.type) {
		case DoctorsActionType.SET_DOCTORS:
			return { ...state, doctors: action.payload };
		case DoctorsActionType.SET_DOCTORS_LIST:
			return {
				...state,
				doctors: action.doctors,
				total: action.total,
				page: action.page,
				limit: action.limit,
			};
		case DoctorsActionType.SET_SEARCH_KEYWORD:
			return { ...state, searchKeyword: action.payload };

		case DoctorsActionType.SET_LOADING:
			return { ...state, loading: action.payload };
		case DoctorsActionType.SET_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
