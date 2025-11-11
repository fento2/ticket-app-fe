import { StoreApi } from "zustand";

export type SetStateZustand<StoreType> = StoreApi<StoreType>["setState"];

export type FnSeStateActionType<
  StoreType,
  StateType,
  KeyType extends keyof StateType
> = (
  key: KeyType,
  set: SetStateZustand<StoreType>
) => (params: StateType[KeyType]) => void;

export type ActionType<StateType> = (params: StateType) => void;
