//alert('Hey, I will be a chatbot soon ! :)')
chrome.runtime.onMessage.addListener(function (request){
    alert(request)
})