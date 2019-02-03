import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import getService from '../../services/getService';

const got = new getService();

got.getAllCharacters()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });
got.getAllBooks()
    .then(res => {
       res.forEach(item => console.log(item.name));
    });
got.getAllHouses()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });

const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;