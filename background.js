/* Event: Runs when extension is installed */
chrome.runtime.onInstalled.addListener(function() {

    // Set which URL the extension can run on
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostEquals: 'doctolib.fr' }
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

});


// chrome.app.runtime.onLaunched.addListener(function() {
//   var windowWidth = 300;
//   var windowHeight = 325;
//   chrome.app.window.create('window.html', {
//     outerBounds: { // 'bounds' is deprecated, and you want full window size
//       width: windowWidth,
//       height: windowHeight,
//       left: screen.availWidth - windowWidth,
//       top: screen.availHeight - windowHeight,
//     },
//     resizable: false,
//     frame: 'none'
//   });
// });
//
