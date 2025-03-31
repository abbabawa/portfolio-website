"use client";
import { ReactElement, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

import getImages from "../../projectImages";
import { IProject } from "@/types/project";
import { getProject } from "@/helpers/project";
import CarouselControl from "@/assets/icons/CarouselControl";

const Project: React.FC<IProject> = ({ id }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };

  let images: ReactElement[] = [];
  let project;
  let details = getProject(Number(id));
  let res = [];
  res.push(
    details?.details?.map((detail) => {
      return <li>{detail}</li>;
    })
  );
  project = getImages(Number(id));
  project.forEach((shot) => {
    let hold = (
      <Carousel.Item key={shot}>
        <img
          className="d-block mx-auto"
          src={shot}
          alt="First slide"
          style={{
            maxHeight: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Carousel.Item>
    );
    images.push(hold);
  });
  return (
    <Row className="mt-5 pt-2">
      <Col md="8" className="p-2 offset-md-1 p-5 homeBox">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls
          prevIcon={
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CarouselControl />
            </div>
          }
          nextIcon={
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                transform: "rotate(180deg)",
              }}
            >
              <CarouselControl />
            </div>
          }
        >
          {images}
        </Carousel>
        <section className="mt-4">
          <h3>{details?.name}</h3>
          <h6 className="ms-2">Features</h6>
          <ul>{res}</ul>
        </section>
      </Col>
    </Row>
  );
};

export default Project;
