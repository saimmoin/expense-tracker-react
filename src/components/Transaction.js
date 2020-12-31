import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction, transactions } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <b>{transaction.text}</b> (by: {transaction.text1})
      <span>
        {sign}
        {Math.abs(transaction.amount)} Rs
      </span>
      <button
        className="delete-btn"
        onClick={() =>
          window.confirm("Are you sure you want to delete the transaction?") &&
          deleteTransaction(transaction.id) &&
          updateLocalStorage()
        }
      >
        x
      </button>
    </li>
  );
};
