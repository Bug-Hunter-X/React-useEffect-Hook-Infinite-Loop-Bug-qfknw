```javascript
// in a functional component
const [count, setCount] = useState(0);

useEffect(() => {
  // wrong! This will cause an infinite loop
  setCount(count + 1);
}, [count]);
```