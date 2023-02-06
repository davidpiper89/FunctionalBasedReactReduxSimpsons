import React from "react";
import { useDispatch } from "react-redux";
import { SET_LIKED_CHARACTER } from "../redux/types";

const Likes = (character) => {
  const dispatch = useDispatch();
  console.log(character);
  return (
    <h2>
      <button
        onClick={() =>
          dispatch({
            type: SET_LIKED_CHARACTER,
            payload: character.character.quote,
          })
        }
      >
        {character.character.liked === true ? "Liked" : "Like?"}
      </button>
    </h2>
  );
};

export default Likes;
