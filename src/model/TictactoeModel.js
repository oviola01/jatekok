//modelben tárolom az osztályokat

export default class TicTacToeModel{
    #list=[];
    #aktJatekos="X";
    constructor(){
        this.#list=[" ", " ", " ", "O", " ", "X", " ", " ", " "];
    }

    getList(){
        return [...this.#list];//... egy másolatot csinál, nem az aktuális listát módosítja
    }

    setStatus(id){
        this.#list[id]=this.#aktJatekos;
        // két = értékegyezés, három = típus egyezés is
        if(this.#aktJatekos==="X"){this.#aktJatekos="O"}
            else{this.#aktJatekos="X"}
        console.log(this.#aktJatekos);
        console.log(this.#list);
    }

    getJatekos(){
        return this.#aktJatekos;
    }
}