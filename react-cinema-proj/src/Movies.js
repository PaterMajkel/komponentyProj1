import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
export function Movies(){
    return(<div>
            <p>Hello from movies</p>
            <p><Link to='/'>Back</Link></p>
            <Button onClick={ApiDodajxD} variant="primary" size="lg" active>
                Dodaj film
            </Button>

        </div>)
}

function ApiDodajxD(){
    console.log('dodaję xD')
}
