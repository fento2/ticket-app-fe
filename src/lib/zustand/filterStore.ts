import { FnSeStateActionType } from "@/types/shared";
import type { DateRange } from "react-day-picker";
import { create, type StateCreator } from "zustand";

type ValueFilter = {
  categories: string[];
  eventTypes: string[];
  locations: string[];
  timeRange: DateRange | undefined;
  minPriceRange: string;
  maxPriceRange: string;
};

type KeyValueFilter = keyof ValueFilter;

type ActionType<StateType> = (params: StateType) => void;

type ActionFilter = {
  setCategories: ActionType<string[]>;
  setEventTypes: ActionType<string[]>;
  setLocations: ActionType<string[]>;
  setTimeRange: ActionType<DateRange | undefined>;
  setMinPriceRange: ActionType<string>;
  setMaxPriceRange: ActionType<string>;
  resetFilter: (key?: KeyValueFilter) => void;
};

type UseFilterStoreType = {
  value: ValueFilter;
  action: ActionFilter;
};

const initialState: ValueFilter = {
  categories: [],
  eventTypes: [],
  locations: [],
  timeRange: undefined,
  minPriceRange: "",
  maxPriceRange: "",
};
/**helper for setActionState */
const setActionFn: FnSeStateActionType<
  UseFilterStoreType,
  ValueFilter,
  KeyValueFilter
> = (key, set) => (params) =>
  set((state) => {
    const newValue = params;
    return {
      value: {
        ...state.value,
        [key]: newValue,
      },
    };
  });

const state: StateCreator<UseFilterStoreType> = (set) => ({
  value: initialState,
  action: {
    setCategories: setActionFn("categories", set),

    setEventTypes: setActionFn("eventTypes", set),

    setLocations: setActionFn("locations", set),

    setTimeRange: setActionFn("timeRange", set),

    setMinPriceRange: setActionFn("minPriceRange", set),

    setMaxPriceRange: setActionFn("maxPriceRange", set),

    resetFilter: (key) => {
      if (!key) {
        return set({ value: initialState });
      } else {
        return set((state) => ({
          value: {
            ...state.value,
            [key]: initialState[key],
          },
        }));
      }
    },
  },
});

export const useFilterStore = create<UseFilterStoreType>(state);
