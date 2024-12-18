chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "closePopup") {
    if (sender.tab) {
      chrome.tabs.remove(sender.tab.id);
    }
  }
});
