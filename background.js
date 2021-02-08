
chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({url : 'https://www.youtube.com/*'}, function(tab){
    if(command === 'current') {
      chrome.tabs.executeScript(tab[0].id, {code: 'document.getElementsByClassName("ytp-play-button")[0].click();'});
    }
    
    if (command === 'next'){
      chrome.tabs.executeScript(tab[0].id, {code: 'document.getElementsByClassName("ytp-next-button")[0].click();'});
    }

    if(command === 'previous') {
      chrome.tabs.executeScript(tab[0].id, {code: 'history.back();'})
    }
    
  });
  
  });
