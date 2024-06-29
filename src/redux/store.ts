import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import knifeReducer from './features/knifeSlice'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        knife: knifeReducer
    },
    // devTools: false              // It will stop showing the details in redux toolkit devtools

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch