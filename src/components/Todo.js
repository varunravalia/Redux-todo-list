import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  return (
    <>
      <div className="main">
        <h1>Add your todo list</h1>
        <div className="addItems">
          <input
            type="text"
            placeholder="Write your todo "
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <i
            className="fa fa-plus"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          ></i>
        </div>
        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h3>{elem.data}</h3>
                <i
                  className="far fa-trash-alt"
                  title="Delete Item"
                  onClick={() => dispatch(deleteTodo(elem.id))}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="removeItems">
          <button className="remove-btn" onClick={() => dispatch(removeTodo())}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
