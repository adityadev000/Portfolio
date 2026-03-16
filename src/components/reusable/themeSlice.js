        import { createSlice } from "@reduxjs/toolkit";

    const savedTheme = localStorage.getItem("theme") || "dark";

    const initialState = {
    mode: savedTheme,
    };

        const themeSlice = createSlice({
        name: "theme",
        initialState,
        reducers: {
            toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
            localStorage.setItem("theme", state.mode);
            },
            setDark: (state) => {
            state.mode = "dark";
            },
            setLight: (state) => {
            state.mode = "light";
            },
        },
        });

        export const { toggleTheme, setDark, setLight } = themeSlice.actions;

        export default themeSlice.reducer;