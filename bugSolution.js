```javascript
// in a functional component
const [count, setCount] = useState(0);

useEffect(() => {
  // Correct! Using a callback function to safely update state. 
  // The effect now runs only when a value outside the component updates the count.
  const interval = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);
```