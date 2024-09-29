import {
	Doctor,
	DoctorsActionType,
	SetDoctorsAction,
	SetSearchKeywordAction,
	SetAppliedFiltersAction,
	SetLoadingAction,
	SetErrorAction,
} from "./types";

export const setDoctors = (doctors: Doctor[]): SetDoctorsAction => ({
	type: DoctorsActionType.SET_DOCTORS,
	payload: doctors,
});

export const setSearchKeyword = (keyword: string): SetSearchKeywordAction => ({
	type: DoctorsActionType.SET_SEARCH_KEYWORD,
	payload: keyword,
});

export const setAppliedFilters = (
	filters: string[]
): SetAppliedFiltersAction => ({
	type: DoctorsActionType.SET_APPLIED_FILTERS,
	payload: filters,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
	type: DoctorsActionType.SET_LOADING,
	payload: isLoading,
});

export const setError = (error: string): SetErrorAction => ({
	type: DoctorsActionType.SET_ERROR,
	payload: error,
});
