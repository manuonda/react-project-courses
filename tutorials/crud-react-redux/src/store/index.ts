import { configureStore, Middleware } from "@reduxjs/toolkit";
import userReducer from "./users/slice";

// middleware(proxy) de persistance
const persistanceLocalStorage = (store) => (next) => (action) => {
	//recuperamos el store
	console.log(store.getState());
	console.log(action);
	//realiza la siguiente action
	const result = next(action);
	console.log(store.getState());
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	// fase 1 : next(action)
	const { type, payload } = action;
	console.log({ type, payload });
	next(action);
	// fase 2
	console.log(store.getState());
};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistanceLocalStorage, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
