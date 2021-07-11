class KeyWord {
    //keyword ex : pharmacie
    //responses ex : ["vous pouvez trouvez la pharmacie la plus proche ici: https ...","vous pouvez trouvez les horaires de votre pharmacie ici : https..."
    constructor(wordlist, text, pictogram, link) {
        //wordlist ex : ["pharmacie", "pharmaci"]
        //text ex : "la pharmacie la plus proche se trouve ..."
        //image ex : "pharmacie.png"
        this.wordlist = wordlist;
        this.text = text;
        this.pictogram = pictogram;
        this.link = link;
    }

    //basic getters
    get_wordlist(){
        return this.wordlist;
    }

    get_text(){
        return this.text;
    }

    get_link(){
        return this.link;
    }

    get_pictogram(){
        return this.pictogram;
    }
}


// The keywords that are processed by the chatbot
const pharmacie_k = new KeyWord(["pharmacie", "pharmaci", "farmacie"], "Pour trouver une pharmacie :", "Logo-Pharmacie.jpg", "https://www.doctolib.fr/pharmacie");
const mdp_k = new KeyWord(["motdepasse", "mot de passe", "mdp", "m d p"], "Pour changer votre mot de passe :", "Logo-Cadenas.jpg", "https://www.doctolib.fr/account/passwords/new");
const covid_k = new KeyWord(["covid", "corona", "coronavirus", "corona virus", "covid19", "covid 19", "vaccination", "vaccin"],"Vous pouvez chercher un creneau pour vous faire vacciner ici :", "Logo-Coronavirus.jpg", "https://www.doctolib.fr/vaccination-covid-19/paris")
const medecin_k = new KeyWord(["médecin", "medecin", "docteur", "doc", "toubib"], "Pour chercher un médecin généraliste :", "Logo-Docteur.png", "https://www.doctolib.fr/medecin-generaliste")

//global list of keywords
const list_of_keywords = [pharmacie_k, mdp_k, covid_k, medecin_k];
