import { createAppSlice } from "./createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"

type TUserState = {
    email: string | null,
    id: number | null,
    token: string | null,
}

const initialState: TUserState = {
    email: null,
    id: null,
    token: null,
}

export const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: create => ({
        setUser: create.reducer(
        (state, action: PayloadAction<any>) => { // !! remove type "any"
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        }),
        deleteUser: create.reducer((state) => {
            state.email = null
            state.id =null
            state.token = null
        }),
    }),
    selectors: {
        selectEmail: user => user.email,
        selectId: user => user.id,
        selectToken: user => user.token,
        selectState: user => user,
    },
})

export const {setUser, deleteUser} = userSlice.actions
export const { selectEmail, selectId, selectToken, selectState } = userSlice.selectors
export default userSlice.reducer