import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        drink_type: "Drink Type",
        credit: "Credit",
        desc: "Description",
        directions: "Directions",
        ingredients: "Ingredients",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseType: (state, action) => { state.drink_type = action.payload },
        chooseCredit: (state, action) => { state.credit = action.payload },
        chooseDesc: (state, action) => { state.desc = action.payload },
        chooseDirections: (state, action) => { state.directions = action.payload },
        chooseIngredients: (state, action) => { state.ingredients = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, chooseCredit, chooseDesc, chooseDirections, chooseIngredients } = rootSlice.actions