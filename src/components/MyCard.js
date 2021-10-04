import { Card } from "react-bootstrap"

const MyCard = (props)=>{
    // props = {
    //     icon: <FaUniversity />,
    //     title: "Computer Science",
    //     subtitle: "University of Jos, 2012-2017",
    //     text: "Attended University of Jos and Bagged a bachelor's degree"
    // }
    return (
        <Card className="">
            <Card.Body className="card-body" >
                <Card.Title className="mb-3">
                    {props.icon}
                    <h4>{props.title}</h4>
                </Card.Title>
                <Card.Subtitle className="mb-2">
                    {props.subtitle}
                </Card.Subtitle>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard