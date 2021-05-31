class Response {
    //ex : pharmacie, pharmacie.png, https://www.doctolib.fr/pharmacie
    constructor(text, pictogram, link) {
        this.text = text;
        this.pictogram = pictogram;
        this.link = link;
    }

    get_text(){
        return this.text;
    }

    get_link(){
        return this.link;
    }
}