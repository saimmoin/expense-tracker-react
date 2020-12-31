import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text1, setText1] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction, transactions } = useContext(GlobalContext);

  function updateLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text1,
      text,
      amount: +amount,
    };
    if (amount === 0) {
      alert("Please Enter Correct Amount!");
    } else {
      addTransaction(newTransaction);
      setText1("");
      setText("");
      setAmount("");
      updateLocalStorage();
      alert("Transaction Added Successfully");
    }
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text1">
            Enter Your Name
            <br />
          </label>
          <input
            type="text"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
