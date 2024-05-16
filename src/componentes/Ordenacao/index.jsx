import './styles.css'

export default function Ordenacao(){
    return(
        <ul className='lista-ordenacao'>
            <li>
                <button className="lista-ordenacao__item-active">Recentes</button>
            </li>
            <li>
                <button className='lista-ordenacao__item'>Recentes</button>
                </li>
        </ul>
    )
}