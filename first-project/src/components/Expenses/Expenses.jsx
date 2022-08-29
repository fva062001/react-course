import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFiler from "./ExpensesFilter";

function Expenses(props){


    const [filteredYear, setFilteredYear] = useState('2020');
    const onSelectedFilter = (selectedYear) =>{
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(expense =>{
      return expense.date.getFullYear() === parseInt(filteredYear);
    });

    return(
      <Card className="expenses">
        <ExpensesFiler selected={filteredYear} onSelectedFilter={onSelectedFilter}/>
          {filteredExpenses.map(expense =>
            <ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
            />
          )}
      </Card>
    );
}

export default Expenses;