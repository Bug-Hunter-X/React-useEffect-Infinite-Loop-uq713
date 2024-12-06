```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way is to avoid updating state inside useEffect if you don't need to trigger re-renders.
    // If you need to perform asynchronous operations like API calls in useEffect, you can add a condition to prevent infinite loops
    // Or only trigger the update when some condition changes, such as a external source.
    console.log('count:', count)
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```