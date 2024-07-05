import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './reducers/appointment';

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
