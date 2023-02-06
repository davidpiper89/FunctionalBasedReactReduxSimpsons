import React from "react";
import Name from "./Name";
import { useDispatch } from "react-redux";
import { REMOVE_CHARACTER } from "../redux/types";
import Image from "./Image";
import Quote from "./Quote";
import Likes from "./Likes";

const Character = (simpson) => {
  const dispatch = useDispatch();
  const character = simpson.simpson;


  if (character.characterDirection === "Right") {
    return (
      <div key={character.quote} className="quote">
        <div className="name">
          <Name character={character} />
        </div>
        <div className="quote">
          <Quote character={character} />
        </div>
        <div className="image">
          <Image character={character} />
        </div>

        <h2>
          <button
            onClick={() =>
              dispatch({
                type: REMOVE_CHARACTER,
                payload: character.quote,
              })
            }
          >
            Remove
          </button>
        </h2>
        <Likes character={character} key={character.quote} />
      </div>
    );
  } else {
    return (
      <div key={character.quote} className="quote">
        <div className="name">
          <Name character={character} />
        </div>
        <div className="image">
          <Image character={character} />
        </div>
        <div className="quote">
          <Quote character={character} />
        </div>

        <h2>
          <button
            onClick={() =>
              dispatch({
                type: REMOVE_CHARACTER,
                payload: character.quote,
              })
            }
          >
            Remove
          </button>
        </h2>
        <Likes character={character} key={character.quote} />
      </div>
    );
  }
};

export default Character;
