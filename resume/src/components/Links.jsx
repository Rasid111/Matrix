import { ListGroup } from "react-bootstrap"

function Links() {
    return(
        <ListGroup horizontal>
            <ListGroup.Item className='rounded-5 border m-2 flex-fill'>
                <a href="#">
                    F
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='rounded-5 border m-2 flex-fill'>
                <a href="#">
                    I
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='rounded-5 border m-2 flex-fill'>
                <a href="#">
                    in
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='rounded-5 border m-2 flex-fill'>
                <a href="#">
                    Pin
                </a>
            </ListGroup.Item>
            <ListGroup.Item className='rounded-5 border m-2 flex-fill'>
                <a href="#">
                    YT
                </a>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Links