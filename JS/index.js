document.getElementById('toggle-button').addEventListener('click', function() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
  
    body.classList.toggle('dark-mode', !isDarkMode);
    body.classList.toggle('light-mode', isDarkMode);
  
    this.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
  

  function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4]; // Gets the time part in HH:MM:SS format
    document.getElementById('utcTime').textContent = utcTime;
}

updateUTCTime(); // Initial call to set the time
setInterval(updateUTCTime, 1000); // Update the time every second