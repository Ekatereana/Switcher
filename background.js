// const urls =  ['https://www.youtube.com/*', 'https://open.spotify.com/*'];

const resources = new Map(
  [
    ['https://www.youtube.com/*', {
      play: 'document.getElementsByClassName("ytp-play-button")[0].click();',
      next: 'document.getElementsByClassName("ytp-next-button")[0].click();',
      previous: 'history.back();'}],
    ['https://open.spotify.com/*', {
      play: 'document.querySelector(\'[data-testid="control-button-pause"]\').click();',
      next: 'document.querySelector(\'[data-testid="control-button-skip-forward"]\').click();',
      previous: 'history.back();'
    }]
  ]);
const urls = Array.from(resources.keys());
const tester = new RegExp('https://?(www.youtube.com|open.spotify.com)/*');
let lastAudible;

chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab){
  console.log('changeinfo',changedInfo);
  if (changedInfo.audible && tester.test(tab.url)) {
    lastAudible = tab;
    console.log('in audible')
  }
  
})

function commandSwitch (tabData, command) {
  chrome.tabs.query(tabData , function(tab){
    if(command === 'current') {
      chrome.tabs.executeScript(tab[0].id, {code: resources.get(tab.url)});
    }
    
    if (command === 'next'){
      chrome.tabs.executeScript(tab[0].id, {code: 'document.getElementsByClassName("ytp-next-button")[0].click();'});
    }

    if(command === 'previous') {
      chrome.tabs.executeScript(tab[0].id, {code: 'history.back();'})
    }
    
  });
}

chrome.commands.onCommand.addListener(function(command) {
  if(lastAudible !==undefined) {
    console.log('lastAudible',lastAudible);
    commandSwitch({url: lastAudible.url, title: lastAudible.title}, command); 
  } else {
    console.log('urls', urls);
    commandSwitch({url: urls}, command);    
  }
  });
