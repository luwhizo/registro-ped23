import { createSlice } from '@reduxjs/toolkit';

export const caratulaSlice = createSlice({
    name: 'caratula',
    initialState: {
        isSaving: true
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});
//Los creadores de acciones se generan para cada función de reducer de casos.
export const { increment } = caratulaSlice.actions;