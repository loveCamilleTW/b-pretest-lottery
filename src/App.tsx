import { useState } from "react";
import "./App.css";

const PRIZE = [
  { count: 1, odd: 0.1 },
  { count: 1, odd: 2.3 },
  { count: 2, odd: 13 },
  { count: 5, odd: 18 },
  { count: 11, odd: 25 },
];

function App() {
  const [prizeCounts, setPrizeCounts] = useState(
    PRIZE.map((prize) => prize.count),
  );
  const [histories, setHistories] = useState<string[]>([]);

  const handleClick = () => {
    const u = Math.random() * 100;

    let oddSum = 0;
    for (let i = 0; i < PRIZE.length; i++) {
      oddSum += PRIZE[i]["odd"];
      if (oddSum >= u && prizeCounts[i] > 0) {
        const history = `抽到${i + 1}獎`;

        setHistories((prev) => [...prev, history]);
        setPrizeCounts((prev) => {
          const newState = [...prev];
          newState[i] -= 1;
          return newState;
        });

        return;
      }
    }

    setHistories((prev) => [...prev, "0"]);
  };

  return (
    <>
      {prizeCounts.map((prizeCount, index) => (
        <div key={index}>{`${index + 1} 獎還剩下 ${prizeCount} 個`}</div>
      ))}
      <button onClick={handleClick}>抽!</button>
      {histories.map((history, index) => (
        <div key={index}>{history}</div>
      ))}
    </>
  );
}

export default App;
