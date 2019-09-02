
chrome.webNavigation.onBeforeNavigate.addListener(function(e) {
    console.log(e.url)
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.update(activeTab.id, {"url":"https://smile.amazon.com"});
    });
}, {url:[{hostEquals:'amazon.com'}, {hostEquals:'www.amazon.com'}]});
