//compare and fill reply with a basic answer
function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          // Stop inner loop when input value matches prompts
          break;
        }
      }
      if (replyFound) {
        // Stop outer loop when reply is found instead of interating through the entire array
        break;
      }
    }
    return reply;
}

function keycompare(text, list) {
    for (let i = 0; i < list.length; i++) {
    let words = list[i].get_wordlist();
        for (let j = 0; j < words.length; j++) {
            if (text.match(words[j])) {
              return list[i];
            }
        }
    }
    return null;

}

function keyword_to_response(input) {
    let product;
    let response;
  
    let text = input.toLowerCase();

    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
      response = new Response(product, "Logo-bonjour.jpg", "");
    }
    else if ((keyword = keycompare(input, list_of_keywords)) != null){
      response = new Response(keyword.get_text(), keyword.get_pictogram(), keyword.get_link());
    }

    else {
      // did not understand  
      product = alternative[Math.floor(Math.random() * alternative.length)];
      response = new Response(product, "Logo-incomprehension.jpg", "");
    }
  
    // Update DOM
    addBoxResponse(input, product, response);
}
