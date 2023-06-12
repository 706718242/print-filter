
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabId === tabs[0].id && changeInfo.status === 'complete') {
      chrome.runtime.reload();
    }
  });
});



chrome.runtime.onConnect.addListener(function(port) {
port.onMessage.addListener(function(request) {



if (request.type === 'readData') {
  
 chrome.storage.sync.get(request.data, function(result){ port.postMessage(result); });
}

if (request.type === 'saveData') {
    
   chrome.storage.sync.set(request.data);
   port.postMessage( 'Data saved successfully!' );
 }




  });
});
