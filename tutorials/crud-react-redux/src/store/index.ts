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
	console.log({ action, state: store.getState() });
	next(action);
};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistanceLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
