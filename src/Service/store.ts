import { configureStore } from '@reduxjs/toolkit';
import serviceFlowReducer from './features/serviceFlow/serviceFlowSlice';


export const store = configureStore({
  reducer: {
    serviceFlow: serviceFlowReducer
  },

  devTools: true 
});

declare global {
  interface Window {
    store: typeof store;
  }
}

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;