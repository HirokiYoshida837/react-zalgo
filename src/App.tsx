import React from 'react';
import Zalgo from "./components/zalgo";


const App: React.FC = () => {
  const message = "the quick brown fox jumps over the lazy dog";
  return (
    <>
      origin : {message}
      <br/>
      glitched : <Zalgo textData={message}/>
    </>
  );
}

export default App;
