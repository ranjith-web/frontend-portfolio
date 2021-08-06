import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Ranjith.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              company="Pramati Software"
              title="Senior Development Engineer"
              date="Feb 2020 - Present"
              content={[
                "GoodKarma - Rewards & Recognition project, this will be a multi-tenant Saas platform For each tenant, we need to have a master configuration Customer name, Program name (name of the loyalty program), Credit name (points, credits, etc), Member type (employees, customers, etc -- to be used in the widgets or dashboard), Loyalty Tiers (0 indicates there is no tier system)",
                "Smartcues - Mobile first application manage customers visiting your business. Free and easy virtual line management. Delight customers and keep them safe. Two kind of applications one is customer and another is spot. In customer application the customer can book virtual line in hotels, restaurants, malls etc which register a business as spot. Spot application can register their business for virtual line management.",
              ]}
            />
            <Resumecontent
              company="Wipro Technologies"
              title="Senior Software Engineer"
              date="Apr 2018 - Feb 2020"
              content={[
                "STORM - Web based application which makes running test scenarios and validating results more efficient.  The tool is flexiable to add new scenarios as the demand rises with the requirements.  The main business line of HPS relies on the files received from exchange with STORM mimics to enable the start of an enrollmen file lifecycle in HPS",
              ]}
            />
            <Resumecontent
              company="HCL Technologies"
              title="Lead Engineer"
              date="Jul 2016 - Apr 2018"
              content={[
                "Haywards - Is a configuration the cisco switch device from Web UI. In this project, we will work with cisco Haywards product on 2k sesries devices up to 50Pids. The customer buy cisco switch, along with web UI, hence they can configure there network with these switch as well as web UI",
              ]}
            />
            <Resumecontent
              company="Zydesoft"
              title="Software Engineer"
              date="Aug 2015 - Jul 2016"
              content={[
                "Leverage - It is a dynamic website for Expo show. In this project, we will create the upcoming Events and all relevant trade show data, like the tradeshow calendar, the business Events, attendee sectors and main exhibitor sectors of current Events.",
              ]}
            />
            <Resumecontent
              company="Innoplexus"
              title="Software Developer"
              date="Feb 2015 - Aug 2015"
              content={[
                "Oil-Bird - Data visulaization platform for clinical research, graph ceated based on the Datas,this product developed for healthcare domain and has many features based on medical terms like IVF, oncology, Lipids, etc.",
              ]}
            />
            <Resumecontent
              company="Exemplarr World Wide"
              title="Junior Programmer"
              date="Dec 2013 - Feb 2015"
              content={[
                "Games - E-learning platform This is a puzzle type game which was developed in HTML5, CSS, Javascript(jQuery). There are three levels in this game (Simple, Medium, and Complex)",
                "This activity is involves conversion of Flash to HTML5, the part of activity is in Flash we are converting it into HTML5 using JavaScript, jquery."
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Sakthi Mariammen Eng Collage B.E [Anna University, Chennai] "
              date="2009 - 2013"
            />
            <Resumecontent
              title="12TH BOARD [Holy Angles matriculation Hr Sec School,Chennai]"
              date="2008 - 2009"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
