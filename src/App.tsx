import React from "react";

import "./styles/index.scss";
import styles from "./styles/App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
