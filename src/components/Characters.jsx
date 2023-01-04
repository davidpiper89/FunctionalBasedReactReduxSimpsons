import React from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Likes from "./Likes";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_CHARACTER } from "../redux/types";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  let searchInput = useSelector((state) => state.search);
  let copy = simpsons;

  switch (sort) {
    case "1":
      copy.sort((a, b) => {
        if (a.character > b.character) return 1;
        if (a.character < b.character) return -1;
        return 0;
      });
      break;
    case "2":
      copy.sort((a, b) => {
        if (a.character < b.character) return 1;
        if (a.character > b.character) return -1;
        return 0;
      });
      break;
    case "3":
      copy.sort((a, b) => {
        if (a.quote > b.quote) return 1;
        if (a.quote < b.quote) return -1;
        return 0;
      });
      break;
    case "4":
      copy.sort((a, b) => {
        if (a.quote < b.quote) return 1;
        if (a.quote > b.quote) return -1;
        return 0;
      });
      break;

    default:
      break;
  }

  if (searchInput) {
    copy = copy.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(searchInput.toLowerCase().trim());
    });
  }

  return copy.map((simpson) => {
    return (
      <div key={simpson.quote} className="quote">
        <div>
          <Name simpson={simpson} />
        </div>
        <div>
          <Image simpson={simpson} />
        </div>
        <div>
          <Quote simpson={simpson} />
        </div>
        <h2>
          <button
            onClick={() =>
              dispatch({
                type: REMOVE_CHARACTER,
                payload: simpson.quote,
              })
            }
          >
            Remove
          </button>
        </h2>
        <Likes simpson={simpson} key={simpson.quote} />
      </div>
    );
  });
};

export default Characters;

// class Characters extends Component {
//   render() {

// function mapStateToProps(state) {
//   return { simpsons: state.simpsons, sort: state.sort };
// }
// export default connect(mapStateToProps)(Characters);
