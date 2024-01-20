import {useState} from "react";
import TicTacToeModel from "../model/TictactoeModel.js";
import Elem from "../view_components/Elem.js";
import "./tictactoe.css";

const tictactoeModel=new TicTacToeModel();

export default function TicTacToe(props){
    //const list=tictactoeModel.getList(); ehelyett használjuk a state-et
        //state speciális változó, ha az értéke változik, akkor az oldal azon része renderelődik, ami használja azt a változót
        //megadom a listát, amit használni szeretnék, és egy metódusnevet, ami a useState paraméterében megadott metódusra hivatkozik
    const [list, setList]=useState([...tictactoeModel.getList()]); //... listánál és objektumnál (összetett adatszerkezeteknél) szükséges, memóriamásolatot csinál
    const [aktJatekos, setAktJatekos]=useState([tictactoeModel.getJatekos()]);

    function kattintas(id){ //ez a szülő eseménye, más neve is lehetne, nem kell a gyerekével azonos legyen
        console.log(id);
        tictactoeModel.setStatus(id);
        setAktJatekos(tictactoeModel.getJatekos());
        setList(tictactoeModel.getList()); 
    }
    
    const [szam, setSzam]=useState(0);
    function novel(){setSzam(szam+1)};

    //returnben 1 db gyökérelem lehet, pl. 1 db div, minden mást abba kell ágyazni
    return (
        <div className="jatek">
            <div className="pelda">
                <h3>State használatára példa</h3>
                <button onClick={novel}>növel</button>
                <p>{szam}</p>
            </div>

            <h2> Tic-Tac-Toe</h2>
            <div className="jatekter">

                {
                    //map olyan mint a for each, csak van returnje, for each a reactban nem jelenítené meg
                    list.map(
                        //paraméterek, amin végigmegyek, amin megyek+az index
                        (elem, index)=>{return(
                            //megadom a paramétert+kulcsként az indexet, majd a paramétereket
                            //function neve itt lehetne bármi, a zárójelben kell megegyezzen a szülő függvényének nevével
                            <Elem kattintas={kattintas} ertek={elem} key={index} index={index}/>
                            //ez a sor itt egy komponens, benne pedig a propok vannak
                            //paraméterként akár objektumot is átadhatok
                        )
                        }
                    )
                }
            </div>
            <p>A következő játékos: {aktJatekos}</p>
        </div>
    )
}