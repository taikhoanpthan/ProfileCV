import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface IProps {
  imgPath: string;
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

function ProjectCard(props: IProps) {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const maxLength = 200; // Số ký tự hiển thị ban đầu

  const handleToggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  const renderDescription = () => {
    if (props.description.length <= maxLength) {
      return props.description;
    }

    if (showFullDesc) {
      return (
        <>
          {props.description}{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleToggleDescription}
          >
            Ẩn bớt
          </span>
        </>
      );
    } else {
      return (
        <>
          {props.description.substring(0, maxLength)}...{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleToggleDescription}
          >
            Xem thêm
          </span>
        </>
      );
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ maxHeight: 215, objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex flex-column justify-content-between h-100">
          <Card.Text style={{ textAlign: "justify" }}>
            {renderDescription()}
          </Card.Text>
          <div>
            <Button variant="primary" href={props.githubLink} target="_blank">
              <BsGithub /> &nbsp;GitHub
            </Button>
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
