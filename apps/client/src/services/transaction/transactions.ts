import { useQuery } from "@tanstack/react-query"
import { AxiosResponse } from "axios";
import { axios } from "../../libs/axios";
import { TransactionDto } from "../../../../../libs/dto/src/transaction/transaction";
import { TRANSACTIONS_KEY } from "../../constants/query-keys";

export const fetchTransactions = async () => {
  const response = await axios.get<TransactionDto[], AxiosResponse<TransactionDto[]>>("/transaction");

  return response.data;
};

export const useTransactions = () => {
  const {
    error,
    isPending,
    data
  } = useQuery({
    queryKey: TRANSACTIONS_KEY,
    queryFn: fetchTransactions
  });

  return {
    transactions: data,
    loading: isPending,
    error
  }
}