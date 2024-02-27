import { useContext } from "react";
import { LayoutContext } from "../context/layoutContext";

export default function UseLayout() {
  const { nightMode, day, night } = useContext(LayoutContext);
  const mode = nightMode ? night : day;
  return mode;
}
