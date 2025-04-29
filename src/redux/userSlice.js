import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api/v1'

export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      const res = await axios.post(`${BASE_URL}/user/profile`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return res.data.body
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Profile fetch failed')
    }
  }
)

export const updateUserName = createAsyncThunk(
  'user/updateUserName',
  async (userName, { getState, rejectWithValue }) => {
    const token = getState().auth.token
    try {
      await axios.put(`${BASE_URL}/user/profile`, { userName }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      return userName
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Update failed')
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userName: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.userName = action.payload.userName
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addCase(updateUserName.fulfilled, (state, action) => {
        state.userName = action.payload
      })
  },
})

export default userSlice.reducer
