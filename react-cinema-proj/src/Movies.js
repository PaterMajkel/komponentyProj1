import {Link} from 'react-router-dom'

export function Movies(){
    return(<div>
            <p>Hello from movies</p>
            <p><Link to='/'>Back</Link></p>
            <button onClick={ApiDodajxD}>Dodaj</button>

        </div>)
}

function ApiDodajxD(){
    console.log('dodaję xD')
}
