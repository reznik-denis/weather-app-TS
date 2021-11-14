import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWether } from 'service'

export const fetchSearchSevenDays = createAsyncThunk(
    'app/fetchSearchSevenDays',
    async ({ lat, lon }:{lat: number, lon: number}, { rejectWithValue }) => {
        try {
            const search = await fetchWether.fetchWeatherSevenDays(lat, lon)
            return search;
        } catch (error) {
            return rejectWithValue({ error });
        }
        
    },
);

export const fetchSearch = createAsyncThunk(
    'app/fetchSerch',
    async (name: string, { rejectWithValue }) => {
        try {
            const search = await fetchWether.fetchWeather(name);
            return search;
        } catch (error) {
            return rejectWithValue(error);
        }
        
    },
);