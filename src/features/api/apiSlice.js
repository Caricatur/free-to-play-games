import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db5cecff72msh340168ba6efe5bap14b458jsnfe59a4ee32eb',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

// _, thunkAPI
export const getGame = createAsyncThunk(
    'game/getSingleGame',
    async (id, thunkAPI) => {
        try {
            console.log(id)
            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
            if (id !== 0) {
                url += '?id=' + id;
            }
            let res = await fetch(url, options);

            const result = await res.json();
            console.log(result)
            return result;
        } catch (err) {
            console.log(err);
        }
    }
);


const apiSlice = createSlice({
    name: "game",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getGame.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getGame.fulfilled, (state, { payload}) => {
            // console.log(payload);
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getGame.rejected, (state) => {
            state.isLoading = false;

        });

    }
});

export default apiSlice.reducer;
