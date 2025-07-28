const randomError = () => {
  const randomNumber = Math.round(Math.random());
  
  try {
    if (randomNumber === 1) {
      console.log("No error occurred")
    } else {
      throw new Error("We found an error!")
    }
  } catch (error) {
    console.log("There is some error ❌:", error)
  }
};
