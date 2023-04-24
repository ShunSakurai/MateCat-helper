chrome.commands.onCommand.addListener((command) => {
  if (command == 'yes' || command == 'no') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { command: command });
    });
  }
});