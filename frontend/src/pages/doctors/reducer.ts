import { DoctorsState, DoctorsAction, DoctorsActionType } from "./types";

export const initialState: DoctorsState = {
	doctors: [],
	searchKeyword: "",
	appliedFilters: [],
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
		case DoctorsActionType.SET_SEARCH_KEYWORD:
			return { ...state, searchKeyword: action.payload };
		case DoctorsActionType.SET_APPLIED_FILTERS:
			return { ...state, appliedFilters: action.payload };
		case DoctorsActionType.SET_LOADING:
			return { ...state, loading: action.payload };
		case DoctorsActionType.SET_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
