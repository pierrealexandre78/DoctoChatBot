class Response {    
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

    get_pictogram(){
        return this.pictogram;
    }
}