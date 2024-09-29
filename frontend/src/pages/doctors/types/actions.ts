import { Doctor } from "./Doctor";

export enum DoctorsActionType {
	SET_DOCTORS = "SET_DOCTORS",
	SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD",
	SET_APPLIED_FILTERS = "SET_APPLIED_FILTERS",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
}

export interface SetDoctorsAction {
	type: DoctorsActionType.SET_DOCTORS;
	payload: Doctor[];
}

export interface SetSearchKeywordAction {
	type: DoctorsActionType.SET_SEARCH_KEYWORD;
	payload: string;
}

export interface SetAppliedFiltersAction {
	type: DoctorsActionType.SET_APPLIED_FILTERS;
	payload: string[];
}

export interface SetLoadingAction {
	type: DoctorsActionType.SET_LOADING;
	payload: boolean;
}

export interface SetErrorAction {
	type: DoctorsActionType.SET_ERROR;
	payload: string;
}

export type DoctorsAction =
	| SetDoctorsAction
	| SetSearchKeywordAction
	| SetAppliedFiltersAction
	| SetLoadingAction
	| SetErrorAction;
