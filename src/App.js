import React, { useEffect } from "react";
import { embedDashboard } from "amazon-quicksight-embedding-sdk";

import { getUrl } from "./getEmbedUrl";

import "./App.scss";

const App = () => {
  useEffect(() => {
    const visualizeDashboard = async () => {
      const url = await getUrl();
      const options = {
        url,
        container: document.getElementById("dashboard"),
      };
      embedDashboard(options);
    };

    visualizeDashboard();
  }, []);

  return (
    <div className="AppContainer">
      <div className="dashboard" id="dashboard"></div>
    </div>
  );
};

export default App;
