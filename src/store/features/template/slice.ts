import { createSlice } from "@reduxjs/toolkit";

import type { templateState } from "./types";

const initialState: templateState = {
  template: {
    routes: [],
    pages: [],
  },
  targetNames: [],
  currentTarget: "",
  targetLinks: {},
  currentTargetNode: null,
};

export const templateSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setTemplate: (state, { payload }) => {
      state.template = payload;
    },
    setTargetNames: (state, { payload }) => {
      state.targetNames = payload;
      state.currentTarget = payload[0];
    },
    setCurrentTarget: (state, { payload }) => {
      state.currentTarget = payload;
    },
    setTargetLinks: (state, { payload }) => {
      state.targetLinks = payload;
    },
    setCurrentTargetNode: (state, { payload }) => {
      state.currentTargetNode = payload;
    },
  },
});

export const { setTemplate, setTargetNames, setCurrentTarget, setTargetLinks, setCurrentTargetNode } =
  templateSlice.actions;

export default templateSlice.reducer;
