import { useState } from "react";
import { useTransactions } from "../../../services/transaction/transactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faTrash } from "@fortawesome/free-solid-svg-icons";
import TransactionDialog from "./transaction-dialog";

export const DashboardPage = () => {
  const { transactions } = useTransactions();
  const [showModal, setShowModal] = useState(false);

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
                  onClick={() => setShowModal(true)}
                  data-action="click->hello#open"
                >
                  New Transaction
                </button>
              </div>
              {showModal && (
                <TransactionDialog />
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
                            ${transaction.amount}
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
