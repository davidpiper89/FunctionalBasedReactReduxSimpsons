import React from "react";
import { useDispatch } from "react-redux";
import { SORT_INPUT } from "../redux/types";

const Sort = () => {
  const dispatch = useDispatch();
  const state = {
    options: [
      { id: 0, name: "Select..." },
      { id: 1, name: "Character Ascending" },
      { id: 2, name: "Character Descending" },
      { id: 3, name: "Quote Ascending" },
      { id: 4, name: "Quote Descending" },
    ],
  };
  return (
    <label>
      Sort By..
      <select
        name="sort"
        onInput={(e) => {
          dispatch({
            type: SORT_INPUT,
            payload: { name: e.target.name, value: e.target.value },
          });
        }}
      >
        {state.options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}{" "}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Sort;
