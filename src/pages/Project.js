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
    // useEffect(()=>{
    //     project = props.getProject(Number(id))
    //     project.screenshots.forEach(shot=>{
    //         let hold = (
    //             <Carousel.Item>
    //                     <img
    //                     className="d-block w-100"
    //                     src={profilePic}
    //                     alt="First slide"
    //                     />
    //                     <Carousel.Caption className="text-dark">
    //                         <h3 className="text-danger bg-primary">First slide label</h3>
    //                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                     </Carousel.Caption>
    //             </Carousel.Item>
    //         )
    //         //images.push(hold)
    //     })
    //     console.log(images)
    // }, [])
    console.log(project)
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
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </Col>
        </Row>
    )
}

export default Project