import { createAppSlice } from "./createAppSlice";

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

const userSlice = createAppSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.id = action.payload.id
            state.token = action.payload.token
        },
        deleteUser: (state) => {
            state.email = null
            state.id =null
            state.token = null
        },
    },
    selectors: {
        selectEmail: user => user.email,
        selectId: user => user.id,
        selectToken: user => user.token,
    },
})

export const {setUser, deleteUser} = userSlice.actions
export const { selectEmail, selectId, selectToken } = userSlice.selectors
export default userSlice.reducer