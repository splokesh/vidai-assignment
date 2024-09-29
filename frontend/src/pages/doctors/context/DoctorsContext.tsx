import React, { createContext, useContext, useEffect, ReactNode, useReducer } from 'react';
import { DoctorsState, DoctorsAction } from '../types';
import { doctorsReducer, initialState } from '../reducer';
import * as actions from '../actions';
export interface DoctorsContextType extends DoctorsState {
    dispatch: React.Dispatch<DoctorsAction>;
}

const DoctorsContext = createContext<DoctorsContextType | undefined>(undefined);

export const DoctorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(doctorsReducer, initialState);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            dispatch(actions.setLoading(true));
            // Replace this with your actual API call
            const response = await fetch('http://localhost:4000/doctors');
            const data = await response.json();
            dispatch(actions.setDoctors(data));
            dispatch(actions.setLoading(false));
        } catch (err) {
            dispatch(actions.setError('Failed to fetch doctors'));
            dispatch(actions.setLoading(false));
        }
    };

    const value = {
        ...state,
        dispatch,
    };

    return <DoctorsContext.Provider value={value}>{children}</DoctorsContext.Provider>;
};

export const useDoctors = () => {
    const context = useContext(DoctorsContext);
    if (context === undefined) {
        throw new Error('useDoctors must be used within a DoctorsProvider');
    }
    return context;
};
