import { useTransactions } from "../../../services/transaction/transactions";

export const DashboardPage = () => {
  const { transactions } = useTransactions();

  return (
    <main className="container mx-auto px-5 flex pt-20">
      <div className="w-full">
        <h1 className="font-bold text-4xl text-center text-white mb-10">
          Transactions
        </h1>
        <div className="text-white text-center">
          <a className="button" href="/transactions/2025/4">
            Prev
          </a>
          <span>5 - 2025 </span>
          <a href="/transactions/2025/6">Next</a>
        </div>
        <div
          className="bg-primary-300 p-10 color-white rounded-lg"
          data-controller="hello"
        >
          <div>
            <div className="flex flex-end justify-end">
              <button
                className="button bg-green-500 mr-5"
                data-action="click->hello#open"
              >
                {" "}
                New Transaction{" "}
              </button>
            </div>
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
                      <form
                        className="contents"
                        action="/transactions"
                        accept-charset="UTF-8"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="authenticity_token"
                          value="szPbUlCq8DjYTqWamQUhdzYqqLHQFGFnZSrFLJxstb_JrhtDkKMV5wRHlStO7MqDvLVYsz33_F9MBGp-AQx6BA"
                          autoComplete="off"
                        />
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
                            <input
                              placeholder="Type a expense/income description"
                              className="form-control border-0"
                              type="text"
                              name="transaction[description]"
                              id="transaction_description"
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
                          <input
                            type="submit"
                            name="commit"
                            value="Create Transaction"
                            className="button bg-green-500 mr-5"
                            data-action="click->hello#closeWithoutStopPropagation"
                            data-disable-with="Create Transaction"
                          />
                          <button
                            className="button bg-red-500"
                            data-action="click->hello#close"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="transaction_2483"
            className="flex border-b border-b-primary-100 py-5 items-center"
          >
            <div className="flex items-center w-full">
              <div className="w-4/5">
                <a
                  className="text-white flex items-center"
                  href="/transactions/2483/edit"
                >
                  <div className="w-4/12"> UNIMED </div>
                  <div className="w-2/12">
                    <span className="text-red-500"> $87.00 </span>
                  </div>
                  <div className="w-3/12 flex flex-col justify-start text-left">
                    <span> 02/07/2024 </span>
                    <div>
                      <svg
                        className="svg-inline--fa fa-credit-card text-xs"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="credit-card"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                        ></path>
                      </svg>
                      <i className="fa-solid fa-credit-card text-xs"></i>{" "}
                      20/05/2025
                    </div>
                  </div>
                  <div className="w-3/12"> GIovana </div>
                </a>
              </div>
              <div className="w-1/5 text-right flex justify-end">
                <form
                  className="button_to"
                  method="post"
                  action="/transactions/2483"
                >
                  <input
                    type="hidden"
                    name="_method"
                    value="delete"
                    autoComplete="off"
                  />
                  <button className="icon-button bg-red-500" type="submit">
                    <svg
                      className="svg-inline--fa fa-trash text-xs"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      ></path>
                    </svg>
                    <i className="fa-solid fa-trash text-xs"></i>
                  </button>
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="beTxgLzHisHt_gD8h5XZOzGPwAXRaCX7WojF3ZM7uunK8mtHhr3gA83xEy0ks0oNS8Z39kFVi7nGXz4Tdsiy8w"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
          <div
            id="transaction_2491"
            className="flex border-b border-b-primary-100 py-5 items-center"
          >
            <div className="flex items-center w-full">
              <div className="w-4/5">
                <a
                  className="text-white flex items-center"
                  href="/transactions/2491/edit"
                >
                  <div className="w-4/12"> NH COMERCIO DE COSMETI </div>
                  <div className="w-2/12">
                    <span className="text-red-500"> $32.00 </span>
                  </div>
                  <div className="w-3/12 flex flex-col justify-start text-left">
                    <span> 08/02/2025 </span>
                    <div>
                      <svg
                        className="svg-inline--fa fa-credit-card text-xs"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="credit-card"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
                        ></path>
                      </svg>
                      <i className="fa-solid fa-credit-card text-xs"></i>{" "}
                      20/05/2025
                    </div>
                  </div>
                  <div className="w-3/12"> Shopping </div>
                </a>
              </div>
              <div className="w-1/5 text-right flex justify-end">
                <form
                  className="button_to"
                  method="post"
                  action="/transactions/2491"
                >
                  <input
                    type="hidden"
                    name="_method"
                    value="delete"
                    autoComplete="off"
                  />
                  <button className="icon-button bg-red-500" type="submit">
                    <svg
                      className="svg-inline--fa fa-trash text-xs"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                      ></path>
                    </svg>
                    <i className="fa-solid fa-trash text-xs"></i>
                  </button>
                  <input
                    type="hidden"
                    name="authenticity_token"
                    value="6aCnlyxi-SKEWEINoWN_8FfPoQd9dYVQ_xqMkzDanEZgtyup_q-ycKz14gZDgR0YlGZXOfcNJOR8DErMfVZ-lA"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
