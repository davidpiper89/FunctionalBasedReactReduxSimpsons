import React from "react";
import { useDispatch } from "react-redux";
import { SET_LIKED_CHARACTER } from "../redux/types";

const Likes = (simpson) => {
  const dispatch = useDispatch()
  return (
    <h2>
      <button
        onClick={() =>
          dispatch({
            type: SET_LIKED_CHARACTER,
            payload: simpson.simpson.quote,
          })
        }
      >
        Like?
      </button>
    </h2>
  );
};

export default Likes;
