// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isOpen: false,
//   message: "",
//   checkingLoading: true,
// };

// const customToastSlice = createSlice({
//   name: "loading",
//   initialState,
//   reducers: {
//     setIsLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//     setIsCheckingLoading: (state, action) => {
//       state.checkingLoading = action.payload;
//     },
//     showError: (state, action: { payload: { title: string; message: string } }) => {
//       state.hasError = true;
//       state.errorTitle = action.payload.title;
//       state.errorMessage = action.payload.message;
//     },
//     hideError: (state) => {
//       state.hasError = false;
//       state.errorTitle = "";
//       state.errorMessage = "";
//     },
//     resetLoadingState: (state) => {
//       state.isLoading = false;
//       state.hasError = false;
//       state.errorTitle = "";
//       state.errorMessage = "";
//       state.checkingLoading = true;
//     },
//   },
// });

// export const {
//   setIsLoading,
//   showError,
//   hideError,
//   setIsCheckingLoading,
//   resetLoadingState,
// } = customToastSlice.actions;
// export default customToastSlice.reducer;
