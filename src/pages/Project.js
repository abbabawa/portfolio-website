import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap"
import { useParams } from "react-router";

import getImages from '../projectImages'

const Project = (props)=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let images = []
    let {id} = useParams()
    let project
    let details = props.getProject(Number(id));
    let res = []
    res.push(details.details.map(detail=>{
        return <li>{detail}</li>
    }))
    project = getImages(Number(id))//props.getProject(Number(id))
        project.forEach(shot=>{
            let hold = (
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={shot}
                        alt="First slide"
                        />
                        {/* <Carousel.Caption className="text-dark">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                </Carousel.Item>
            )
            images.push(hold)
        })
    return (
        <Row className="mt-5 pt-2">
            <Col md="8" className="p-2 offset-md-1 p-5 homeBox" >
                
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {images}
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={profilePic}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    
                </Carousel>
                <section className="mt-4">
                    <h3>{details.name}</h3>
                    <h6 className="ms-2">Features</h6>
                    <ul>
                        {res}
                    </ul>
                </section>
            </Col>
            
        </Row>
    )
}

export default Project