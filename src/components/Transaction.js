import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}
        {Math.abs(transaction.amount)} Rs
      </span>
      <button
        className="delete-btn"
        onClick={() =>
          window.confirm("Are you sure you want to delete the transaction?") &&
          deleteTransaction(transaction.id)
        }
      >
        x
      </button>
    </li>
  );
};
