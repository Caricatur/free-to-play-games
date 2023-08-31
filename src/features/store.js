import {configureStore} from "@reduxjs/toolkit";

import gamesSlice from "./games/gamesSlise";
import apiSlice from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        games: gamesSlice,
        game: apiSlice
    },
})
