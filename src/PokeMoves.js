import {moves} from './data'

const PokeMoves = ()=> {
    const isLogged = true
    return (
    <div>
        <h1>PokeMoves</h1>
        <ul>
            {moves.map(item => (
                // <li>
                //     {item.id}. {item.move}
                // </li>
                <PokeMoveCard key={item.id} item ={item} />
            ))}
        </ul>
    </div>
)
}

export default PokeMoves