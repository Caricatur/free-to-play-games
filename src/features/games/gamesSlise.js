import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'db5cecff72msh340168ba6efe5bap14b458jsnfe59a4ee32eb',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

// _, thunkAPI
export const getGames = createAsyncThunk(
    'games/getGames',
    async ([categorySet, sortTyp, platformType], thunkAPI) => {
        try {
            // console.log(typeof platformType)
            let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
            let f = 0;
            if (platformType !== 0 && platformType !== 'all') {
                f = 1;
                url += '?platform=' + platformType;
            }
            if (sortTyp !== '0') {
                if (f === 0) {
                    f = 1;
                    url += '?sort-by=' + sortTyp;
                } else {
                    url += '&sort-by=' + sortTyp;
                }
            }
            if (categorySet !== 'all' && categorySet !== 0) {
                if (f === 0) {
                    url += '?category=' + categorySet;
                } else {
                    url += '&category=' + categorySet;
                }
            }

            let res = await fetch(url, options)
            const result = await res.json();

            return result;
        } catch (err) {

            console.log(err);
        }
    }
);


const gamesSlice = createSlice({
    name: "games",
    initialState: {
        list: [],
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getGames.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getGames.fulfilled, (state, { payload}) => {
            // console.log(payload);
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getGames.rejected, (state) => {
            state.isLoading = false;

        });

    }
});

export default gamesSlice.reducer;
