"use client";
import { FaUniversity } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import PageTemplate from "../PageTemplate";
import MyCard from "../MyCard";
import { ReactElement } from "react";

let data = [
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">MERN Stack developer</h5>,
    subtitle: "Sintov, 2024 - 2025",
    text: "Worked with various teams to design and implement Client applications, fix bugs and improve performance.",
  },
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">Full Stack developer</h5>,
    subtitle: "Punch Agency, 2022 - 2024",
    text: "Designed and implemented performant applications cutting across web, desktop and mobile platforms.",
  },
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">Tech Consultant</h5>,
    subtitle: "Dannyvet, 2019 - present",
    text: "Develop and maintain Business Management System. Danny Agric. And Vet. Services Ltd.",
  },
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">Backend Developer</h5>,
    subtitle: "APLORI, 2019 - 2020",
    text: "Programmed Backend of organisational website.",
  },
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">Instructor</h5>,
    subtitle: "5AM Technologies, 2019-2021",
    text: "Worked as a web design and development Instructor",
  },
  {
    icon: <MdComputer className="fs-3 text-danger" />,
    title: <h5 className="my-2">Youth Service</h5>,
    subtitle: "NYSC, 2017-2018",
    text: "Mandatory one year of national service with the National Youth Service corps (NYSC)",
  },
  {
    icon: <GiGraduateCap className="fs-3 text-danger" />,
    title: <h5 className="my-2">Computer Science</h5>,
    subtitle: "University of Jos, 2012-2017",
    text: "Attended University of Jos and Bagged a bachelor's degree (BSc.)",
  },
  {
    icon: <GiGraduateCap className="fs-3 text-danger" />,
    title: <h5 className="my-2">Industrial Training (IT).</h5>,
    subtitle: "Harrisoft Technologies, 2015-2016",
    text: "Student Industrial Work Experience Scheme",
  },
  {
    icon: <FaUniversity className="fs-3 text-danger" />,
    title: <h5 className="my-2">Secondary School</h5>,
    subtitle: "Air Force Military School Jos, 2003-2009",
    text: "Senior Secondary School Certificate",
  },
  // {
  //     icon: <GiGraduateCap className="fs-3 text-danger" />,
  //     title: <h5 className="my-2">Computer Science</h5>,
  //     subtitle: "University of Jos, 2012-2017",
  //     text: "Attended University of Jos and Bagged a bachelor's degree"
  // },
  // {
  //     icon: <MdComputer className="fs-3 text-danger" />,
  //     title: <h5 className="my-2">Computer Science</h5>,
  //     subtitle: "University of Jos, 2012-2017",
  //     text: "Attended University of Jos and Bagged a bachelor's degree"
  // },
  // {
  //     icon: <FaUniversity className="fs-3 text-danger" />,
  //     title: <h5 className="my-2">Computer Science</h5>,
  //     subtitle: "University of Jos, 2012-2017",
  //     text: "Attended University of Jos and Bagged a bachelor's degree"
  // },
  // {
  //     icon: <GiGraduateCap className="fs-3 text-danger" />,
  //     title: <h5 className="my-2">Computer Science</h5>,
  //     subtitle: "University of Jos, 2012-2017",
  //     text: "Attended University of Jos and Bagged a bachelor's degree"
  // }
];

//let buttons = ["Education", "Experience"]
let buttons: string[] = [];
const EducationAndExperience = () => {
  let components: ReactElement[] = [];
  data.forEach((res) => {
    let hold = (
      <div className="col-md-4 mt-3">
        <MyCard
          title={res.title}
          icon={res.icon}
          text={res.text}
          subtitle={res.subtitle}
        />
      </div>
    );
    components.push(hold);
  });
  return (
    <PageTemplate
      components={components}
      buttons={buttons}
      pageTitle="Education & Experience"
    />
  );
};

export default EducationAndExperience;
