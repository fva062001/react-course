import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";



function NewExpense(props){

    const [conditional, setConditional] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: (Math.floor(Math.random()* 100)).toString()
        };
        props.onAddExpense(expenseData);
    };

    const cancelExpenseAffHandler = (data) =>{
        setConditional(data);
    };

    const addNewExpenseHandler = () =>{
        setConditional(false);
    };


    return(
        <div className="new-expense">
            {conditional && (<button onClick={addNewExpenseHandler}>Add New Expense</button>)}
            {!conditional && (<ExpenseForm onCancelForm={cancelExpenseAffHandler} onSaveExpenseData={saveExpenseDataHandler} />)}
        </div>
    );
}


export default NewExpense;