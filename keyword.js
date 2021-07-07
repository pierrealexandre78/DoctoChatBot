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

const pharmacie_k = new KeyWord(["pharmacie", "pharmaci"], "Pour trouver une pharmacie :", "Logo-Pharmacie.jpg", "https://www.doctolib.fr/pharmacie");
const mdp_k = new KeyWord(["motdepasse", "mot de passe", "mdp", "m d p"], "Pour changer votre mot de passe :", "Logo-Cadenas.jpg", "https://www.doctolib.fr/account/passwords/new");

const list_of_keywords = [pharmacie_k,mdp_k];