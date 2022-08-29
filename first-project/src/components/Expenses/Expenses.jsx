import React, {useState} from "react";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){

    // - Variables
    const [filteredYear, setFilteredYear] = useState('2020');

    // - Functions
    const onSelectedFilter = (selectedYear) =>{
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense =>{
      return expense.date.getFullYear() === parseInt(filteredYear);
    });



    return(
      <Card className="expenses">
        <ExpensesFiler selected={filteredYear} onSelectedFilter={onSelectedFilter}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    );
}

export default Expenses;