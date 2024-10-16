import React, { useEffect, useRef, useState, useCallback } from "react";

const WS_CONNECTION = "ws://localhost:3000";

function Counter() {
  const [count, setCount] = useState(0);
  const socket = useRef(null);
  const latestCount = useRef(count); // Save the latest value

  useEffect(() => {
    latestCount.current = count;
  }, [count]);

  const initializeWebSocket = useCallback(() => {
    socket.current = new WebSocket(WS_CONNECTION);

    socket.current.onmessage = message => {
      if (message.data === "sendCounterValue") {
        socket?.current?.send(JSON.stringify({ count: latestCount.current }));
      }
    };

    return () => {
      socket.current?.close();
    };
  }, []);

  useEffect(() => {
    return initializeWebSocket();
  }, [initializeWebSocket]);

  return (
    <>
      <h1>Counter App</h1>
      <p>count is {count}</p>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>Increase</button>
      </div>
    </>
  );
}

export default Counter;
