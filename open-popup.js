document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick_window_popup, false)

    function onclick_window_popup () {
        chrome.windows.create({
            type: 'popup',
            url: "popup.html"
        }, function (newWindow) {
            console.log(newWindow);
            chrome.tabs.executeScript(newWindow.tabs[0].id, {
                code: 'document.write("hello world");'
            });
        });
    }
}, false)
