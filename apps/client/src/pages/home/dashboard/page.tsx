import { useState } from "react";
import { useTransactions } from "../../../services/transaction/transactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrash } from "@fortawesome/free-solid-svg-icons";

export const DashboardPage = () => {
  const { transactions } = useTransactions();
  const [showModal, setShowModal] = useState();

  return (
    <body
      className="bg-primary-500 modal-closed"
      data-turbolinks="false"
      data-new-gr-c-s-check-loaded="14.1229.0"
      data-gr-ext-installed=""
    >
      <div className="fixed w-full z-10">
        <header className="container mx-auto text-center w-full flex h-16 z-10 bg-primary-500 items-center justify-center">
          <div className="w-1/12"></div>
          <ul className="text-white flex flex-row justify-center py-5 w-10/12">
            <li className="px-3">
              <a href="/budget">Planner</a>
            </li>
            <li className="px-3">
              <a href="/categories">Categories</a>
            </li>
            <li className="px-3">
              <a href="/transactions">Transactions</a>
            </li>
            <li className="px-3">
              <a href="/credit_cards">Credit Cards</a>
            </li>
            <li className="px-3">
              <a href="/import">Import</a>
            </li>
            <li className="px-3">
              <a href="/export">Export</a>
            </li>
            <li className="px-3">
              <a href="/insights">Insights</a>
            </li>
            <li className="px-3">
              <a href="/goals">Goals</a>
            </li>
            <li className="px-3">
              <a href="/financial_roadmap">Financial Roadmap</a>
            </li>
          </ul>
          <div
            id="nav"
            className="text-white relative flex-grow flex items-center w-1/12"
            data-controller="nav"
          >
            <div className="relative">
              <button
                className="nav__link--me bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center"
                data-action="click->nav#handleClick"
              >
                <span className="a-for-screen-reader">R</span>
              </button>
              <div
                className="absolute top-12 -left-11 hidden"
                id="navigation_me"
              >
                <div className="bg-primary-300 w-72 p-5 text-left">
                  <section className="nav-menu__section">
                    <h3 className="text-lg font-bold">
                      <span>Personal Settings</span>
                    </h3>
                    <ul>
                      <li>
                        <form
                          className="button_to"
                          method="post"
                          action="/users/sign_out"
                        >
                          <input
                            type="hidden"
                            name="_method"
                            value="delete"
                            autoComplete="false"
                          />
                          <button type="submit">Log out</button>
                          <input
                            type="hidden"
                            name="authenticity_token"
                            value="bRTGxGjaLpj_ydgsKXvIEFEwIRpnW53zVFyFO6fUK2ZPdPTamn3UMdLai6qCUPGYLmv0-aOvvrvOWtxV3vvx7Q"
                            autoComplete="false"
                          />
                        </form>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

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
              {showModal && (
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
                                  <option value="5">
                                    Servicos de assinatura
                                  </option>
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
              )}
            </div>

            {transactions &&
              transactions.map((transaction) => (
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
                        <div className="w-4/12">{transaction.description}</div>
                        <div className="w-2/12">
                          <span className="text-red-500">
                            {" "}
                            ${transaction.amount}{" "}
                          </span>
                        </div>
                        <div className="w-3/12 flex flex-col justify-start text-left">
                          <span> 02/07/2024 </span>
                          <div>
                            <FontAwesomeIcon icon={faCreditCard} />
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
                        <button
                          className="icon-button bg-red-500"
                          type="submit"
                        >
                          <FontAwesomeIcon icon={faTrash} />
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
              ))}
          </div>
        </div>
      </main>
      <div className="modal-overlay"></div>
    </body>
  );
};
