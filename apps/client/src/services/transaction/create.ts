import { CreateTransactionDto } from "@reactive-finances/dto";
import { TransactionDto } from "@reactive-finances/dto";
import { axios } from "@/client/libs/axios";
import { queryClient } from "@/client/libs/query-client";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const createTransaction = async (data: CreateTransactionDto) => {
    const response = await axios.post<TransactionDto, AxiosResponse<TransactionDto>, CreateTransactionDto>(
      "/transaction",
      data,
    );
  
    return response.data;
  };

export const useCreateTransaction = () => {
    const {
      error,
      isPending: loading,
      mutateAsync: createTransactionFn,
    } = useMutation({
      mutationFn: createTransaction,
      onSuccess: (data) => {
        queryClient.setQueryData<TransactionDto>(["transaction", { id: data.id }], data);
  
        queryClient.setQueryData<TransactionDto[]>(["transactions"], (cache) => {
          if (!cache) return [data];
          return [...cache, data];
        });
      },
    });
  
    return { createTransaction: createTransactionFn, loading, error };
  };
  