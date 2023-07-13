import bulbon from '../img/bulbon.PNG'
import bulboff from '../img/bulboff.PNG'
import { useState } from 'react';
function App1() {
  const [imageSrc, setImageSrc] = useState(bulboff);

  // Function to change the image source
  const changeImageSrc = () => {
    setImageSrc(bulbon);
  }

  return (
    <div>
      <img src={imageSrc} alt="Example" />
      <button onClick={changeImageSrc}>Change Image</button>
    </div>
  );
}

export default App1;
 