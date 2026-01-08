import React, { useContext, useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

// Wrapper para toggle
const ThemeToggleWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(10deg);
  }
`;

// Wrapper para Brand
const NavbarBrandWrapper = styled.div`
  max-width: 60%;
  @media (max-width: 576px) {
    max-width: 50%;
  }

  .gradient-text {
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(45deg, #FFD700, #C9A0DC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// Toggle personalizado
const CustomToggle = styled(Navbar.Toggle)`
  border-color: #FFD700 !important;

  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23FFD700' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
`;

// Nav link estilo más sólido
const StyledNavLink = styled(Nav.Link)`
  font-weight: 600;
  color: #fff !important;
  margin: 0 0.5rem;
  transition: all 0.3s ease;

  &:hover, &.active {
    color: #FFD700 !important;
    transform: scale(1.05);
  }
`;

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Manejo de scroll y links
  useEffect(() => {
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
        setExpanded(false);
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.addEventListener('click', handleNavClick));

    return () => navLinks.forEach(link => link.removeEventListener('click', handleNavClick));
  }, []);

  // Active nav link al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;
      let activeSection = null;
      sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          activeSection = section.getAttribute('id');
        }
      });
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      if (activeSection) {
        const activeNavLink = document.querySelector(`.nav-link[href="#${activeSection}"]`);
        activeNavLink?.classList.add('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto navbar glass
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-glass', 'shadow-lg');
        } else {
          navbar.classList.remove('navbar-glass', 'shadow-lg');
        }
      }
    };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);

  return (
    <Navbar
      as="nav"
      bg={isDarkMode ? "dark" : "dark"}
      variant="dark"
      expand="lg"
      sticky="top"
      className="navbar-dark"
      expanded={expanded}
      ref={navbarRef}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container className="d-flex justify-content-between">
        <NavbarBrandWrapper>
          <Navbar.Brand href="#home" className="gradient-text">DevOps Portfolio</Navbar.Brand>
        </NavbarBrandWrapper>

        <div className="d-flex align-items-center">
          <ThemeToggleWrapper className="d-flex d-lg-none me-2">
            <ThemeToggle />
          </ThemeToggleWrapper>
          <CustomToggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle navigation"
          />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" as="ul">
            {['home','about','skills','projects','resume','contact'].map((section) => (
              <Nav.Item as="li" key={section}>
                <StyledNavLink href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</StyledNavLink>
              </Nav.Item>
            ))}
            <Nav.Item as="li">
              <ThemeToggleWrapper className="d-none d-lg-flex">
                <ThemeToggle />
              </ThemeToggleWrapper>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

