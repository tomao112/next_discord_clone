import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;