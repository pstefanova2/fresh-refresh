/*
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
  

  // Function to refresh the freshcaller live page
function refreshPage() {
    console.log("Refreshing the page...");
    location.reload();
  }
  
  // Check if the current URL matches the specified URL and refresh the page every 5 minutes
  function checkURLAndRefresh() {
    if (location.href === "https://cobaltix-help.freshcaller.com/live") {
      refreshPage();
      console.log("youre at freshcaller");
    }
  }
  
 // Check the URL and refresh every 5 minutes
 //setInterval(checkURLAndRefresh, 5 * 60 * 1000);
 setInterval(checkURLAndRefresh, 60 * 1000);
*/

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
  
  // Function to refresh the freshcaller live page
  function refreshPage() {
    console.log("Refreshing the page...");
    location.reload();
  }
  
  // Check if the current URL matches the specified URL and refresh the page every 5 minutes
  function checkURLAndRefresh() {
    if (location.href === "https://cobaltix-help.freshcaller.com/live") {
      console.log("You're at Freshcaller");
      const reloadInterval = 5 * 60 * 1000; // 5 minutes
      setInterval(refreshPage, reloadInterval);
    } else {
        setInterval(checkForElement, 1000);
    }
  }
  
    checkURLAndRefresh();
  