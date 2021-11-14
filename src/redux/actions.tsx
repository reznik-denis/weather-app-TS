import { createAction} from "@reduxjs/toolkit";

export const currentSearch = createAction<string | undefined>('form/currentSearch');

