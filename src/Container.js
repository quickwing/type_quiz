import Card from "./Card";
import { useState } from "react";
import { myData } from "./myData";

export default function Container() {
  const defData = myData.default;
  const [page, setPage] = useState(1);
  const [position, setPosition] = useState(0);
  const [visi, setVisi] = useState(true);
  const changePage = (newPage) => {
    setTimeout(() => {
      setPosition(-500);
    }, 300);
    setTimeout(() => {
      setPage(newPage);
      setPosition(0);
      setVisi(false);
    }, 600);
    setTimeout(() => {
      setVisi(true);
    }, 900);
  };
  return (
    <div>
      {visi && (
        <Card setPage={changePage} data={defData[page]} position={position} />
      )}
    </div>
  );
}
