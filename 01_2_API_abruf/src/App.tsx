import { useState, useEffect } from "react";

type Starship = {
  id: number;
  name: string;
};

type People = {
  id: number;
  name: string;
};

function App() {
  const [starshipdata, setStarshipdata] = useState<Starship[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/starships")
      .then((response) => response.json())
      .then((json) => setStarshipdata(json));
  }, []);

  const [peopleData, setPeopleData] = useState<People[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((response) => response.json())
      .then((json) => setPeopleData(json));
  }, []);
  return (
    <>
      <h1>Local API Data - localhost:3000</h1>
      <div className="container">
        <div className="shipsCard">
          {starshipdata.map((starship) => (
            <h3 key={starship.id}>{starship.name}</h3>
          ))}
        </div>
        <div className="peopleCard">
          {peopleData.map((person) => (
            <h3 key={person.id}>{person.name}</h3>
          ))}
        </div>
      </div>
      <p>
        To get an output on this page, you need to "npm run start" in
        01_NodeExpress_Lvl_2-1 first.
      </p>
    </>
  );
}

export default App;
