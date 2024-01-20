export default function Elem(props){
    function kattintas(){
        console.log("kitkatt", props.index);
        props.kattintas(props.index); //itt a propként megadott függvénynevet adom meg, nem a gyerekét, és nem is a szülőét, de ált ezeket ugyanúgy nevezzük
    }
    return(
        <div className="elem" onClick={kattintas}>
            <p>{props.ertek}</p>
        </div>
    )

}