"use client";
import { Card } from "react-bootstrap";
import PageTemplate from "../PageTemplate";
import { IWorkHistory } from "../../types/workHistory";
import Link from "next/link";
import { ReactElement } from "react";

const WorkHistory: React.FC<IWorkHistory> = ({ workHistory }) => {
  let buttons: string[] = [];
  let components: ReactElement[] = [];
  workHistory.forEach((res) => {
    let hold = (
      <div className="col-md-6 mt-3">
        <Card className="shadow">
          <Card.Header>{res.name}</Card.Header>
          <Card.Body>
            {/* <Card.Title>{res.client}</Card.Title> */}
            <Card.Text>
              <span className="fw-bold">Client:</span> {res.client}
              <br />
              <span className="fw-bold">Period: </span> {res.period}
              <br />
              <a href={res.url}>{res.name}</a>
            </Card.Text>
            <Link href={"/project/" + res.id}>
              <button className="btn btn-danger">View Project</button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
    components.push(hold);
  });
  return (
    <PageTemplate
      buttons={buttons}
      components={components}
      pageTitle="My Portfolio"
    />
  );
};

export default WorkHistory;
