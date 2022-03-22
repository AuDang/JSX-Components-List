import {moves} from './data'

const PokeMoves = ()=> {
    const isLogged = true
    return (
    <div>
        <h1>PokeMoves</h1>
        <ul>
            {is Logged 
            ? moves.map(item => (
                // <li>
                //     {item.id}. {item.move}
                // </li>
                <PokeMoveCard key={item.id} item ={item} />
            ))
            : "Not Logged In"}
        </ul>
    </div>
)
}

export default PokeMoves