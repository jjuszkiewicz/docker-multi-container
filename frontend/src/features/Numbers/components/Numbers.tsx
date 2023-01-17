import { FC, useEffect, useState } from "react";
import { apiClient } from "../../../apiClient/apiClient";
import "./Numbers.css";

export const Numbers: FC = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await apiClient.get("/api/random-numbers");
      setNumbers(data.numbers);
    })();
  }, []);

  return (
    <section className="container-centered">
      <div className="container-number">
        <h1 className="header">Numbers</h1>
        <ul className="numbers">
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
