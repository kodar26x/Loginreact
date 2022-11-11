import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


function Cardsaya(props) {
   





    return (

        <Card className='m-5' style={{ width: '15rem' }} >
            <Card.Img variant="top" src={props.img} style={{ objectFit: 'cover', height: '7rem', width: '13.5rem' }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.nama}</Card.Text>

                <p style={{ maxHeight: "100px", overflowY: 'scroll' }}>
                    {props.body}
                </p>

                <Link to={`/edit/${props.id}`}>Edit</Link>
                <button onClick={() => props.delet(props.id)}>Delet</button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>

    );
}

export default Cardsaya;