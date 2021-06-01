  //will take a response object instead of product as argument
  function addBoxResponse(input, product, response) {
    const messagesContainer = document.getElementById("messages");
  
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `<class="avatar"><span>${input}</span>`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "img/" + response.get_pictogram();
    botImg.width = 64;
    botImg.height = 64;
    botImg.resi
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "En train d'ecrire...";
    botDiv.appendChild(botText);
    botDiv.appendChild(botImg);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    //messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  
    // Fake delay to seem "real"
    
    setTimeout(() => {
      botText.innerText = `${response.get_text()}`; 
      //reponse instantanee en vocal
      //textToSpeech(product)
    }, 2000
    )
    
}