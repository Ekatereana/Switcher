// chrome.browserAction.onClicked.addListener(function (tab) {
//   // No tabs or host permissions needed!
//   console.log("Turning " + tab.url + " red!");
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"',
//   });
// });

console.log('hello');

chrome.commands.onCommand.addListener(function(command) {
    if(command === 'test_feature') {
      console.log('call feature 1');
      chrome.tabs.query({url : 'https://www.youtube.com/*'}, function(tab){
        console.log('in query');
        console.log(0, tab[0]);
       chrome.tabs.executeScript(tab[0].id, {file: './js/youtubePlayerScript.js'}, function(result){
         console.log(result);
       });
      })
    }
  });
