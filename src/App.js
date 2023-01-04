import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { SET_SIMPSONS_API, SET_SCREEN_MODE } from "./redux/types";
import Interface from "./components/Interface";
import Splash from "./components/Splash";

const App = () => {
  const dispatch = useDispatch();
  let screenMode = useSelector((state) => state.screenMode);
  let simpsons = useSelector((state) => state.simpsons);

  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    dispatch({ type: SET_SIMPSONS_API, payload: results.data });
  };

  useEffect(() => {
    getApiData();
  }, []);

  setTimeout(() => {
    dispatch({ type: SET_SCREEN_MODE, payload: 1 });
  }, 500);

  if (screenMode === 0) {
    return <Splash />;
  }

  return simpsons ? <Interface /> : "Loading";
};

export default App;
