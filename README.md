# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug is an infinite loop caused by updating the state variable inside the `useEffect`'s callback without properly managing dependencies.

## Bug Description
The `useEffect` hook's dependency array `[count]` ensures that the effect only runs when `count` changes. However, within the effect, `setCount(count + 1)` is called, which immediately triggers another re-render. This leads to a continuous cycle of re-renders and updates, causing an infinite loop and potential browser crashes.

## Bug Reproduction
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console and potentially a browser freeze.