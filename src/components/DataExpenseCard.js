import { useState } from "react";
import "../styles/dataExpense.css";
import { IoIosArrowDown } from "react-icons/io";
import {expenses,color,total,optionList,pickOption} from "../utitliy/data"


export const DataExpenseCard = () => {
 
  let [option, setOption] = useState({
    toggle: false,
    value: "This month",
  });


  
  return (
    <div className="expenseCard">
      <section className="cardSection_one">
        <p>Your total spend</p>
        <div className="selectBoxContainer">
          <section className="selectBox" onClick ={()=>setOption({...option,toggle:!option.toggle})}>
            <span>{option.value}</span>
            <IoIosArrowDown />
          </section>
          {
            option.toggle && <div className="options">
              {optionList.map((val) => {
                return <section key={val} className="option" onClick={()=>pickOption(val,option,setOption)}>{val}</section>;
              })}
            </div>
          }
        </div>
      </section>

      <section className="cardSection_two">
        <p>SAR</p>
        <p>502.5</p>
      </section>
      <section className="cardSection_three">
        <div className="expenseBarContainer">
          <div className="expenseBar">
            {expenses.map((item, index) => {
              return (
                <section key={item.id}
                  style={{
                    width: `${(item.expense / total(expenses)) * 100}%`,
                    background: `${color[index]}`,
                  }}
                ></section>
              );
            })}
          </div>
        </div>
        <div className="expenseIndicator">
          {expenses.map((item, index) => {
            return (
              <div className="expenseItems" key={item.id}>
                <p style={{ background: `${color[index]}` }}></p>
                <span>{item.area}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
