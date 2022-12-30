import React from "react";

export default function ExpenseForms() {
    function log(e){
        e.preventDefault();
        const title=e.target.title.value;
        const amount=e.target.amount.value;
        const date=e.target.date.value;
        console.log(title+ " " +amount+ " "+ date )
        

    }
  return (
    <div>
        <form action="" onSubmit={log}>
        <input type="text"  placeholder="Expense title" name="title"/>
        <input type="text"  placeholder="Amount " name="amount"/>
        <input type="date" name="date"/>
        <button >print</button>
        </form>
    </div>
  )
}
