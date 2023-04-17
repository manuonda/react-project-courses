import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "david garcia",
		email: "manuonda@gmail.com",
		github: "yazmanzito",
	},
	{
		id: "2",
		name: "andres garcia",
		email: "manuonda@gmail.com",
		github: "manuonda",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

// function que se autoinvoca : IFI
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return DEFAULT_STATE;
})();

// PayloadAction nos permite tipar y definir de que tipo
// en vez de tipar todo el objecto
export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default userSlice.reducer;

// exportamos la action
export const { addNewUser, deleteUserById } = userSlice.actions;
