# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook: creating an infinite loop by modifying the state variable within the effect's dependency array.

The `bug.js` file contains the erroneous code. The `bugSolution.js` demonstrates how to correct it.

## Bug Description
The `useEffect` hook's dependency array specifies which values trigger the effect function.  If the state variable `count` changes (e.g. it's updated within the effect itself), the effect runs again, causing an infinite loop.

## Solution
The corrected code uses functional updates which prevents the infinite loop by ensuring the effect only runs when the state variable changes from outside of the effect itself.