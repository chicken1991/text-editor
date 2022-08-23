const butInstall = document.getElementById('buttonInstall');

// Event handler for beforeinstallprompt
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

  // event listener for butInstall
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle('hidden', true);
});

// handler for appinstalled
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
}); 
