import { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { FiGrid, FiBox, FiDollarSign, FiUser, FiClock } from 'react-icons/fi';

const Dashboard = () => {
  const [activeKey] = useState('/active-listings');

  return (
    <Container fluid>
      <Row>
        
        <Col md={3} lg={2} className="bg-light vh-100 p-3">
          <Nav variant="pills" className="flex-column" activeKey={activeKey}>
            <Nav.Link as={Link} to="/active-listings" className="mb-2">
              <FiGrid className="me-2" />
              Active Listings
            </Nav.Link>
            <Nav.Link as={Link} to="/my-bids" className="mb-2">
              <FiDollarSign className="me-2" />
              My Bids
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="mb-2">
              <FiUser className="me-2" />
              Profile
            </Nav.Link>
          </Nav>
        </Col>

        
        <Col md={9} lg={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
