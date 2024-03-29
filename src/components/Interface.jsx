import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Characters from "./Characters";
import {
  ADD_CHARACTER,
  SET_USER_INPUT,
  SET_SEARCH_INPUT,
} from "../redux/types";
import Sort from "./Sort";

const Interface = () => {
  const dispatch = useDispatch();
  const simpsons = useSelector((state) => state.simpsons);
  let count = 0;
  simpsons.forEach((simpson) => {
    if (simpson.liked) {
      count++;
    }
  });

  const inputRef = useRef();
  const inputRef1 = useRef();
  const onButtonClick = () => {
    inputRef.current.value = "";
    inputRef1.current.value = "";
  };

  return (
    <>
      <h1>Simpsons quotes</h1>
      <p>Total No. of Likes: {count} </p>
      <h2
        onInput={(e) => {
          dispatch({
            type: SET_USER_INPUT,
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      >
        Add Character:
        <input ref={inputRef} type="text" name="newCharacterInput" />
        and quote:
        <input ref={inputRef1} type="text" name="newQuoteInput" />
        <button
          onClick={() => {
            dispatch({ type: ADD_CHARACTER });
            onButtonClick();
          }}
        >
          Add
        </button>
      </h2>
      <div
        onInput={(e) => {
          dispatch({
            type: SET_SEARCH_INPUT,
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      >
        <h2>
          Search
          <input type="text" name="search"></input>
        </h2>
      </div>
      <Sort />

      <Characters />
    </>
  );
};

export default Interface;
