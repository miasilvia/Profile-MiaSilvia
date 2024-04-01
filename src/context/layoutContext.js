import { createContext, useState } from "react";
export const LayoutContext = createContext();

//inisiate react context
const LayoutContextProvider = (props) => {
  const [data, setData] = useState({
    nightMode: false,
    day: {
      color: "#000",
      backgrounds: "#fff",
      backgroundHeader: "#C7C8CC",
    },
    night: {
      color: "#ffff",
      background: "#000000",
      backgroundHeader: "#000000",
      backgroundNavbar: "#3C3633",
      textColor: "#ffffff",
    },
  });

  const handleToggle = () => {
    setData((prevState) => ({
      ...prevState,
      nightMode: !data.nightMode,
    }));
  };

  return (
    <LayoutContext.Provider
      value={{
        ...data,
        handleToggle,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
