import { create } from "zustand";

type CanvasType = 'freeStyle' | 'painting'

interface GlobalState {
  canvasType: CanvasType;
  setCanvasType: (tool: CanvasType) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  canvasType: "freeStyle",
  setCanvasType: (tool) => set({ canvasType: tool }),
}));
