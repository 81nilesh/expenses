import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={dropDownChangeHandler}>
                    <option value="2022">2023</option>
                    <option value="2022">2022</option>
                    <option value="2022">2021</option>
                    <option value="2022">2020</option>
                    {/* <option value="2022">2019</option> */}
                </select>
            </div>

        </div>
    );
};

export default ExpensesFilter;
