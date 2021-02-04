const urls = ['https://www.youtube.com/*', 'https://open.spotify.com/*']

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({url : urls}, function(tab){
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
