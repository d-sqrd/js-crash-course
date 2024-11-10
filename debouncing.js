let counter = 0;

const getData = () => {
  console.log("Fetching data ...", counter++);
};

// betterFunction creates a closure around the timeOutId variable
const betterFunction = function (cb, delay) {
  let timeOutId = null; // timeOutId is defined once in the scope of this closure

  // This function is returned and can access `timeOutId` (because of closure)
  return () => {
    if (timeOutId !== null) {
      clearTimeout(timeOutId); // Clears the previous timeout if it exists
    }

    // Set a new timeout, updating `timeOutId`
    timeOutId = setTimeout(() => {
      cb(); // Calls the callback (getData) after the delay
    }, delay);
  };
};

// Create a debounced function `handleKeydown` from `betterFunction`
const handleKeydown = betterFunction(getData, 1000);

// Simulating keydown events to see the closure in action
handleKeydown(); // Call 1: Creates a timeout, timeOutId is set
setTimeout(handleKeydown, 200); // Call 2: Clears previous timeout, resets it
setTimeout(handleKeydown, 500); // Call 3: Clears previous timeout, resets it
setTimeout(handleKeydown, 800); // Call 4: Clears previous timeout, resets it

// After 1 second from the last call, getData will be triggered.
