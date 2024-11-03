import { useState } from 'react';
import './App.css';
import KeyPressNotice from './KeyPressNotice';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <KeyPressNotice />
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ fontSize: '22px', color: 'white' }}
        >
          Display the currently pressed key on the screen in real-time. {count}
        </button>
      </div>
    </>
  );
}

export default App;
