import { Typography, Button } from '@mui/material';
import { useState } from 'react';

// Without Formatting
// function App() {
//  const [count, setCount] = useState(0);
//  return (
//    <div>
//      <Typography variant='h4'>
//        {count}
//      </Typography>
//      <Button variant='contained' onClick={() => setCount(count + 1)}>
//        Increment
//      </Button>
//      <Button variant='contained' onClick={() => setCount(count - 1)}>
//        Decrement
//      </Button>
//    </div>
//  );
// }


// With Formatting
function App() {
  const [count, setCount] = useState(0);
  
 function formattedCount(count) {
    if (count < 2) {
        return `You can do it! ${count}`;
    } else if (count < 4) {
        return `Almost There! ${count}`;
    } else {
        return `You did it! ${count}`;
    }
  }
  return (
    <div>
    <Typography variant='h4'>
      {formattedCount(count)}
    </Typography>
    <Button variant='contained' onClick={() => setCount(count + 1)}>
      Increment
    </Button>
    <Button variant='contained' onClick={() => setCount(count - 1)}>
      Decrement
    </Button>
  </div>
 )
} 


 export default App;
