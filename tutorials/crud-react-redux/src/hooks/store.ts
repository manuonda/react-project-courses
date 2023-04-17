import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// Redux no es capaz de inferir
// en vez de utilizar el useSelector directamente en los archivos .tsx
// puesto que no sabe a que estado tiene , para cada uno usamos un pequeña
// abstraccion , se usa esto en todos los tsx en vez de depender de react-redux en
// los tsx
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
