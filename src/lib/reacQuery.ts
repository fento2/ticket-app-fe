/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, UseMutationOptions } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {},
});

//type unutk dapat retun dari fn async
type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<
  ReturnType<FnType>
>;

//type unutk params useMutationFn
type MutationOptionType<
  FnType extends (...args: any) => Promise<any>,
  PayloadType
> = UseMutationOptions<ApiFnReturnType<FnType>, Error, PayloadType>;

export { queryClient };
export type { ApiFnReturnType, MutationOptionType };
