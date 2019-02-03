import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

import './app.css';

// import getService from '../../services/getService';

// const got = new getService();

// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });
// got.getAllBooks()
//     .then(res => {
//        res.forEach(item => console.log(item.name));
//     });
// got.getAllHouses()
//     .then(res => {
//         res.forEach(item => console.log(item.name));
//     });



export default class App extends Component {
    constructor() {
        super();
        this.state= {
            isEdit: false
        }
    }

    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }
    
    render() {
        const {isEdit} = this.state;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { !isEdit ? <RandomChar/> : null}                          
                            <button 
                                onClick={this.onSwitch} 
                                className="button-hide d-flex justify-content-center">
                                { !isEdit ? 'Hide' : 'Show'} 
                            </button>
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
    }
};
