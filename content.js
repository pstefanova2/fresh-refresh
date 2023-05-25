// Function to check if the element with the specified class and data-test-id attributes exists on the page
function checkForElement() {
    console.log("Checking for the element...");
  
    const element = document.querySelector('div.refresh-notification.cursor-pointer[data-test-id="notification-btn"]');
    if (element) {
      console.log("Element found! Refreshing the page...");
      location.reload();
    } else {
      console.log("Element not found.");
    }
  }
  
  // Check for the element every 1 second
  setInterval(checkForElement, 1000);
  