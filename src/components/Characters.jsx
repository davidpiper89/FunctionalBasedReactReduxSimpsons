import React from "react";
import Character from "./Character";
import { useSelector } from "react-redux";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const sort = useSelector((state) => state.sort);
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

  return copy.map((simpson) => <Character simpson={simpson} />);
};

export default Characters;
