import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";
import { createTransactionSchema } from "@reactive-finances/dto";
import { useCreateTransaction } from "@/client/services/transaction/create";
import { Button } from "@/client/components/button";
import { Form, FormControl, FormField } from "@/client/components/form";

export const idSchema = z
  .string()
  .cuid2()
  .default(createId())
  .describe("Unique identifier for the item in Cuid2 format");

const formSchema = createTransactionSchema.extend({ });
type FormValues = z.infer<typeof formSchema>;

const TransactionDialog = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { description: "" },
  });

  const { createTransaction, loading: createLoading } = useCreateTransaction();

  const loading = createLoading;

  const onSubmit = async (values: FormValues) => {
    console.log("onSubmit");
    await createTransaction({ description: values.description});

    close();
  };

  return (
      <div className="modal">
        <div className="modal-content">
          <div className="w-128">
            <div className="m-auto">
              <header className="centered">
                <h1 className="text-white mb-5 text-center text-3xl font-bold">
                  New transaction
                </h1>
              </header>
              <div className="bg-primary-300 p-5">
                <Form {...form}>
                  <form className="contents" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_description"
                        >
                          Description
                        </label>
                      </div>
                      <div className="w-4/6">
                        <FormField
                          name="description"
                          control={form.control}
                          render={({ field }) => (
                            <FormControl>
                              <input
                                placeholder="Type a expense/income description"
                                className="form-control border-0"
                                type="text"
                                // name="transaction[description]"
                                id="transaction_description"
                                {...field}
                              />
                            </FormControl>
                            )}
                          />
                        
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_amount"
                        >
                          Amount
                        </label>
                      </div>
                      <div className="w-4/6">
                        <input
                          placeholder="Type the expense/income amount"
                          className="form-control border-0"
                          type="text"
                          name="transaction[amount]"
                          id="transaction_amount"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_date"
                        >
                          Date
                        </label>
                      </div>
                      <div className="w-4/6">
                        <input
                          placeholder="Date of expense/income"
                          className="form-control border-0"
                          type="text"
                          name="transaction[date]"
                          id="transaction_date"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_type"
                        >
                          Type
                        </label>
                      </div>
                      <div className="w-4/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_type_expense"
                        >
                          Expense
                        </label>
                        <input
                          type="radio"
                          value="expense"
                          checked={true}
                          name="transaction[type]"
                          id="transaction_type_expense"
                        />
                        <label
                          className="pl-5 text-white font-bold"
                          htmlFor="transaction_type_income"
                        >
                          Income
                        </label>
                        <input
                          type="radio"
                          value="income"
                          name="transaction[type]"
                          id="transaction_type_income"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_credit_card_id"
                        >
                          Credit Card
                        </label>
                      </div>
                      <div className="w-4/6">
                        <select
                          name="transaction[credit_card_id]"
                          id="transaction_credit_card_id"
                        >
                          <option value="">Select a credit card</option>
                          <option value="1">Rico</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_invoice_date"
                        >
                          Invoice date
                        </label>
                      </div>
                      <div className="w-4/6">
                        <input
                          placeholder="Credit card invoice"
                          className="form-control border-0"
                          type="text"
                          name="transaction[invoice_date]"
                          id="transaction_invoice_date"
                        />
                      </div>
                    </div>
                    <div className="flex mb-5 items-center">
                      <div className="w-2/6">
                        <label
                          className="text-white font-bold"
                          htmlFor="transaction_category_id"
                        >
                          Category
                        </label>
                      </div>
                      <div className="w-4/6">
                        <select
                          name="transaction[category_id]"
                          id="transaction_category_id"
                        >
                          <option value="">Select a category</option>
                          <option value="20">ADP</option>
                          <option value="16">Caridade</option>
                          <option value="15">Carro</option>
                          <option value="3">Contas da casa</option>
                          <option value="17">Educacao</option>
                          <option value="24">Emergency fund</option>
                          <option value="19">Emergency fund</option>
                          <option value="8">Farmacia</option>
                          <option value="6">Gasolina</option>
                          <option value="4">GIovana</option>
                          <option value="18">Impostos</option>
                          <option value="13">Investimentos</option>
                          <option value="11">Lazer</option>
                          <option value="22">Mary Kay</option>
                          <option value="23">Mary Kay Venda</option>
                          <option value="7">Mercado</option>
                          <option value="9">Moto</option>
                          <option value="2">Restaurantes</option>
                          <option value="12">Salario</option>
                          <option value="21">Saude</option>
                          <option value="5">Servicos de assinatura</option>
                          <option value="1">Shopping</option>
                          <option value="14">Viagem</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex mt-10">
                      <Button
                        type="submit"
                        value="Create Transaction"
                        disabled={loading}
                        className="button bg-green-500 mr-5"
                      >Create</Button>
                      <button
                        className="button bg-red-500"
                        data-action="click->hello#close"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TransactionDialog;
