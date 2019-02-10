import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/characterPage';

import './app.css';

export default class App extends Component {   
    
    
    state = {
        isEdit: false,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }
    
    render() {
        const {isEdit} = this.state;

        if (this.state.error) {
            return <ErrorMessage />
        }

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
                    <CharacterPage/>                   
                </Container>
            </>
        );
    }
};
