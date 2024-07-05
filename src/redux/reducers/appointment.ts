import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Appointment {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

interface AppointmentsState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentsState = {
  appointments: [],
  loading: false,
  error: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointmentStart(state) {
      state.loading = true;
      state.error = null;
    },
    addAppointmentSuccess(state, action: PayloadAction<Appointment>) {
      state.loading = false;
      state.appointments.push(action.payload);
    },
    addAppointmentFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addAppointmentStart,
  addAppointmentSuccess,
  addAppointmentFailure,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
