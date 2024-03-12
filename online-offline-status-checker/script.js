function updateOnlineStatus() {
    const statusElement = document.getElementById('status');
    if (navigator.onLine) {
      statusElement.textContent = 'You are currently online.';
      statusElement.style.color = '#28a745';
    } else {
      statusElement.textContent = 'You are currently offline.';
      statusElement.style.color = '#dc3545'; 
    }
  }
  
  // Initial status check
  updateOnlineStatus();
  
  // Listen for online/offline events
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  