import { Card, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { FiClock, FiDollarSign } from 'react-icons/fi';

const ActiveListings = () => {
  const auctions = [
    { id: 1, title: 'Vintage Camera', currentBid: 150, endTime: '2023-12-31', image:'https://i.pinimg.com/736x/06/a4/79/06a479786f640055d9b129efd41b47c7.jpg'  },
    { id: 2, title: 'Antique Chair', currentBid: 300, endTime: '2023-12-28', image: 'https://i.pinimg.com/736x/9c/02/43/9c0243a81d2092ebded1a029c53f84dc.jpg' },
    // Add more sample data
  ];

  return (
    <div>
      <h2 className="mb-4">Active Listings</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {auctions.map(auction => (
          <Col key={auction.id}>
            <Card>
              <Card.Img variant="top" src={auction.image} />
              <Card.Body>
                <Card.Title>{auction.title}</Card.Title>
                <div className="d-flex justify-content-between mb-2">
                  <span><FiDollarSign /> {auction.currentBid}</span>
                  <span><FiClock /> {auction.endTime}</span>
                </div>
                <ProgressBar now={60} className="mb-3" />
                <Button variant="primary" className="w-100">Place Bid</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ActiveListings;