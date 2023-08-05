const body = document.body;

// Function to update the background color based on cursor position
const updateBackgroundColor = (event) => {
  const { clientX } = event;
  const screenWidth = window.innerWidth;
  const percentX = (clientX / screenWidth) * 100;

  // Set the bluish-gray background color based on cursor position
  const grayColor = 200 - percentX * 0.2;
  const GrayColor = `rgb(${grayColor}, ${grayColor}, ${grayColor})`;
  body.style.backgroundColor = GrayColor;
};

// Add event listener to the body to listen for mousemove events
body.addEventListener("mousemove", updateBackgroundColor);
