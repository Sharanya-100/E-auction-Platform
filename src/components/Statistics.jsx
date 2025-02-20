import { Card, Row, Col } from 'react-bootstrap';
import { FiTrendingUp, FiDollarSign, FiUsers } from 'react-icons/fi';

const Statistics = () => {
  return (
    <Row className="mb-4 g-4">
      <Col md={4}>
        <Card>
          <Card.Body>
            <FiTrendingUp size={24} className="mb-2" />
            <Card.Title>Total Auctions</Card.Title>
            <Card.Text className="display-6">245</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FiDollarSign size={24} className="mb-2" />
            <Card.Title>Total Bids</Card.Title>
            <Card.Text className="display-6">1,234</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FiUsers size={24} className="mb-2" />
            <Card.Title>Active Users</Card.Title>
            <Card.Text className="display-6">589</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Statistics;