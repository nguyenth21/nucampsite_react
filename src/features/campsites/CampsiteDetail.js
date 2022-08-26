import { Card, CardImg, CardText, CardBody, Col, Container, Row } from 'reactstrap';
import CampsitesList from './CampsitesList';
import { selectRandomCampsite } from './campsitesSlice';

const CampsiteDetail = ({ campsite }) => {
    const { image, name, description } = campsite;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

export default CampsiteDetail;