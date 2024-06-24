import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredValue, setEnteredValue] = useState(null);

  function submit() {
    setEnteredValue(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredValue ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={submit}>Set Name</button>
      </p>
    </section>
  );
}
