import React from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../common/Loader";
import loadable from "@loadable/component";


const ToDo = loadable(() => import("../pages/ToDo"), {
  fallback: <Loader />,
});

const PrivateRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/todo" element={<ToDo />} />
        
      </Routes>
    </>
  )
};
export default PrivateRoutes;