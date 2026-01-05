import React, { createContext, useContext, useState } from "react";

const IdeaContext = createContext();

export const useIdea = () => useContext(IdeaContext);

export const IdeaProvider = ({ children }) => {
  const [stage, setStage] = useState("input"); // input | roasting | result
  const [ideaData, setIdeaData] = useState(null);
  const [roastResult, setRoastResult] = useState(null);

  const startRoast = async (data) => {
    setIdeaData(data);
    setStage("roasting");

    // TEMPORARY: Simulate API delay (We will replace this with real Gemini API later)
    return new Promise((resolve) => {
      setTimeout(() => {
        setRoastResult({
          score: 42,
          verdict: "Pivot or Perish",
          burn: "This isn't a business, it's a charity for AWS.",
          details: "Your CAC is higher than your ego.",
        });
        setStage("result");
        resolve();
      }, 4000); // 4 seconds of "The Wait"
    });
  };

  const resetRoast = () => {
    setStage("input");
    setIdeaData(null);
    setRoastResult(null);
  };

  return (
    <IdeaContext.Provider
      value={{ stage, startRoast, resetRoast, roastResult }}
    >
      {children}
    </IdeaContext.Provider>
  );
};
