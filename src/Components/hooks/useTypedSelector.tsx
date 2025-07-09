import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../Store/Reducers";

export const postsTypedSelector: TypedUseSelectorHook<RootState> = useSelector;