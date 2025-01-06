import { useRef } from 'react';
import { useState } from "react";

export default function Player() {
  const playerNameField = useRef();
  const [playerName, setPlayerName] = useState(null);

  const changePlayerName = () => {
    setPlayerName(playerNameField.current.value);
    playerNameField.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome { playerName ? playerName : "unknown entity" }</h2>
      <p>
        <input ref={playerNameField} type="text" />
        <button onClick={changePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
