import axios from "axios";

const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_BE,
});

type ApiResponseBase<DataType> = {
  result: {
    success: boolean;
    message: string;
    data?: DataType;
  };
};

export { apiCall };
export type { ApiResponseBase };
