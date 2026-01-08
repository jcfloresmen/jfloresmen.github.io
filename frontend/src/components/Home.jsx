import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { FaJenkins, FaDocker, FaAws, FaChartLine } from 'react-icons/fa';
import { SiTerraform, SiAzure, SiGooglecloud, SiOracle } from 'react-icons/si';
import profilePhoto from '../assets/photo-jcfloresmen.jpeg'; // Add your photo to assets folder
import { SiMicrosoftazure } from 'react-icons/si';




const PurpleSpan = styled.span`
  color: #2E86C1;
`;

const HeroSection = styled.div`
  padding: 120px 0;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 575px) {
    padding: 80px 0;
  }
`;

const PolaroidFrame = styled.div`
  position: relative;
  width: 260px;
  height: 320px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px 20px 60px 20px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: rotate(-3deg);
  transition: all 0.3s ease;

  &::after {
    content: 'Juan Carlos Flores Mendoza';
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: var(--text-primary);
    text-align: center;
  }

  &:hover {
    transform: rotate(0deg) translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 575px) {
    width: 200px;
    height: 280px;
    padding: 15px 15px 55px 15px;

    &::after {
      bottom: 18px;
      font-size: 12px;
    }
  }
`;

const ProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const SkillIconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(5deg);
  }
`;

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      <HeroSection className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <PolaroidFrame>
                <ProfileImage src={profilePhoto} alt="Profile" fluid loading="lazy" />
              </PolaroidFrame>
            </Col>
            <Col lg={8} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4 gradient-text">
                <span className="hero-header">Hey there, I'm</span><br />
                <PurpleSpan className="hero-name">Juan Carlos 👋</PurpleSpan>
              </h1>
           <div className="lead mb-5 typing-animation" style={{ textAlign: "justify" }}>
                <p>
                  I'm a Solutions Architect and DevOps professional with hands-on experience in AWS, Azure, GCP, and Oracle Cloud. I specialize in designing scalable, resilient, and cost-efficient infrastructures, automating CI/CD pipelines, and deploying secure, containerized applications that streamline development and accelerate delivery.
                </p>
                <p>
                  Currently, I work at Pacífico Perú, leading teams and managing infrastructure at scale, ensuring the reliability, security, and efficiency of critical systems. I guide cloud adoption strategies, implement best practices, and mentor team members to deliver high-quality solutions.
                </p>
                <p>
                  Over the years, I have helped teams reduce deployment times, improve system reliability, and implement cloud-native solutions that drive business growth. My work combines infrastructure as code, observability, and automation to ensure software delivery is fast, reliable, and secure.
                </p>
                <p>
                  Let's build robust cloud solutions, optimize software delivery, and leverage the power of modern cloud technologies together! 🚀
                </p>
              </div>

              <div>
                <Button href="#contact" variant="primary" size="lg" className="cta-button glow-button me-3">
                  Contact Me
                </Button>
                <Button href="#resume" variant={isDarkMode ? "outline-light" : "outline-dark"} size="lg" className="cta-button">
                  View Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <Container className="section">
        <Row>
          <Col lg={8} className="mx-auto text-center">
            <h2 className="section-title reveal">What I Do</h2>
            <p className="lead mb-5 reveal">
              I build and manage cloud-native DevOps solutions to bridge development and operations, ensuring fast, reliable, and secure software delivery.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><FaJenkins /></SkillIconContainer>
              <h3>CI/CD Pipelines</h3>
              <p>Automated build, test, and deployment workflows using Jenkins, GitHub Actions, and more.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><SiTerraform /></SkillIconContainer>
              <h3>Infrastructure as Code</h3>
              <p>Terraform, CloudFormation, and ARM templates to provision and manage cloud infrastructure.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><FaDocker /></SkillIconContainer>
              <h3>Containerization</h3>
              <p>Docker and Kubernetes for container orchestration and microservices deployment.</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><FaAws /></SkillIconContainer>
              <h3>AWS Cloud</h3>
              <p>EC2, S3, IAM, RDS, ECS, and more for secure and scalable cloud deployments.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><SiMicrosoftazure /></SkillIconContainer>
              <h3>Azure Cloud</h3>
              <p>Azure Virtual Machines, Storage, AKS, and DevOps pipelines for enterprise workloads.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><SiGooglecloud /></SkillIconContainer>
              <h3>GCP Cloud</h3>
              <p>Compute Engine, Cloud Storage, Kubernetes Engine, and automation with CI/CD pipelines.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><SiOracle /></SkillIconContainer>
              <h3>Oracle Cloud</h3>
              <p>OCI compute, database, and networking services to deploy enterprise-grade solutions.</p>
            </div>
          </Col>

          <Col md={4} className="mb-4 reveal">
            <div className="text-center card-3d">
              <SkillIconContainer><FaChartLine /></SkillIconContainer>
              <h3>Monitoring & Logging</h3>
              <p>Prometheus, Grafana, and CloudWatch for performance monitoring, observability, and troubleshooting.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;