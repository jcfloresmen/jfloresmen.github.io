import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              
              <p className="lead">
                I am Juan Carlos Flores Mendoza, Solutions Architect and DevOps professional with extensive experience leading teams and managing critical infrastructure in enterprise environments.
              </p>

              <h4 className="mt-4">Experience & Leadership</h4>
              <p>
                Currently at Pacífico Perú, I lead teams and oversee large-scale infrastructure, ensuring secure, scalable, and reliable systems that support critical operations.
              </p>

              <h4 className="mt-4">Technical Expertise</h4>
              <p>
                I specialize in designing scalable and resilient architectures, automating CI/CD pipelines, and deploying secure, containerized applications. I work across AWS, Azure, GCP, and Oracle Cloud to optimize software delivery and operational efficiency.
              </p>

              <h4 className="mt-4">DevOps Mindset</h4>
              <p>
                I strongly believe in continuous improvement, automation, and collaboration. I apply best practices in DevOps to reduce deployment times, enhance system reliability, and maximize team productivity.
              </p>

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I document experiences and share insights from real-world projects in infrastructure and DevOps to inspire and guide other professionals.
              </p>

              <h4 className="mt-4">Professional Interests</h4>
              <p>
                My focus is on cloud technologies, infrastructure automation, system architecture, and DevOps methodologies. I am constantly exploring innovative solutions to optimize processes and deliver real business value.
              </p>

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                Feel free to reach out via <a href="mailto:jcfloresmen@gmail.com">jcfloresmen@gmail.com</a>. I am open to collaboration, mentorship, and opportunities in DevOps and Cloud Architecture.
              </p>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
