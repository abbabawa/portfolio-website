"use client";
import { ReactElement, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

import getImages from "../../projectImages";
import { IProject } from "@/types/project";
import { getProject } from "@/helpers/project";
import CarouselControl from "@/assets/icons/CarouselControl";
import Image from "next/image";

const Project: React.FC<IProject> = ({ id }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const images: ReactElement[] = [];

  const details = getProject(Number(id));
  const res = [];
  res.push(
    details?.details?.map((detail, i) => {
      return <li key={i}>{detail}</li>;
    })
  );
  const project = getImages(Number(id));
  project.forEach((shot) => {
    const hold = (
      <Carousel.Item key={shot}>
        <Image
          className="d-block mx-auto"
          src={shot}
          alt="First slide"
          style={{
            maxHeight: "300px",
            display: "flex",
            justifyContent: "center",
          }}
          width={details?.name === "Transit Tracker Mobile App" ? 150 : 700}
          height={details?.name === "Transit Tracker Mobile App" ? 300 : 400}
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
