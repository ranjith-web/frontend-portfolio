import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const { imgPath, title, description, link, completed, noButton = false } = props;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Link href={link}>{title}</Card.Link>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {!noButton && <Button variant="primary">
          {completed ? 
            <Button variant="primary" href={link} target="_blank">
              <BiLinkExternal /> &nbsp;
              Source
            </Button> 
            : "In process"
          }
        </Button>}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
