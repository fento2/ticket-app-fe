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

/**Action only required one params with no callBack */
export type ActionType<StateType> = (params: StateType) => void;

/**this Type can Params or callback like useState*/
export type ActionTypeWithCallBack<StateType> = (
  params: StateType | ((param: StateType) => StateType)
) => void;

export type FnMultipleParams = <ParamsTypes extends unknown[]>(
  ...args: ParamsTypes
) => void;
