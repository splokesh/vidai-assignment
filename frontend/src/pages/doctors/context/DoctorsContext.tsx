import React, { createContext, useEffect, ReactNode, useReducer, useCallback } from 'react';
import * as qs from 'qs';
import { DoctorsState, DoctorsAction } from '../types';
import { doctorsReducer, initialState } from '../reducer';
import * as actions from '../actions';

export interface DoctorsContextType extends DoctorsState {
    dispatch: React.Dispatch<DoctorsAction>;
}

export const DoctorsContext = createContext<DoctorsContextType | undefined>(undefined);

export const DoctorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(doctorsReducer, initialState);

    const fetchDoctors = useCallback(async () => {
        try {
            dispatch(actions.setLoading(true));

            const queryParams = {
                page: state.page,
                limit: state.limit,
                searchKeyword: state.searchKeyword,
                specialty: state.specialty,
                location: state.location,
            }
            const response = await fetch('http://localhost:4000/doctors?' + qs.stringify(queryParams));
            const data = await response.json();
            dispatch(actions.setDoctorsList({ doctors: data.doctors, total: data.totalCount, page: data.page, limit: data.limit, totalPages: data.totalPages }));
        } catch (err) {
            console.error(err, "<err<");
            dispatch(actions.setError('Failed to fetch doctors'));
        } finally {
            dispatch(actions.setLoading(false));
        }
    }, [state.page, state.limit, state.searchKeyword, state.specialty, state.location]);


    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors]);



    const value = {
        ...state,
        dispatch,
    };

    return <DoctorsContext.Provider value={value}>{children}</DoctorsContext.Provider>;
};
