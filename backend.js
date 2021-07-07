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


function keyword_to_response(input) {
    let product;
    let response;

    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();

    if (compare(prompts, replies, text)) {
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    }
      else if (text.match(/(motdepasse|mot de passe|mdp|m d p)/gi)) {
      // If no match, check if message contains `mot de passe`
      product = mdp[Math.floor(Math.random() * mdp.length)];
      response = new Response("Pour changer votre mot de passe :", "Logo-Cadenas.jpg", "https://www.doctolib.fr/account/passwords/new");
    } else if (text.match(/(pharmacie)/gi)) {
      response = new Response("Pour trouver une pharmacie :", "Logo-Pharmacie.jpg", "https://www.doctolib.fr/pharmacie");
      product = response.get_text() + " " + response.get_link();
    }
     else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    // Update DOM
    addBoxResponse(input, product, response);
}

function send_response(input) {
    let product;
    let response;

    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();

    if (compare(prompts, replies, text)) {
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    }
      else if (text.match(/(motdepasse|mot de passe|mdp|m d p)/gi)) {
      // If no match, check if message contains `mot de passe`
      product = mdp[Math.floor(Math.random() * mdp.length)];
      response = new Response("Pour changer votre mot de passe :", "Logo-Cadenas.jpg", "https://www.doctolib.fr/account/passwords/new");
    } else if (text.match(/(pharmacie)/gi)) {
      response = new Response("Pour trouver une pharmacie :", "Logo-Pharmacie.jpg", "https://www.doctolib.fr/pharmacie");
      product = response.get_text() + " " + response.get_link();
    }
     else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    return response;
    // Update DOM
    // addBoxResponse(input, product, response);
}
