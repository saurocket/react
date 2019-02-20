import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import ItemDetails, {Field} from '../itemDetails';
// import ErrorMessage from '../errorMessage';
// import gotService from '../../services/getService';
// import RowBlock from '../rowBlock';

export default class HomePage extends Component {

    state = {
        isEdit: false
    };

    
    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }


    render() {        
        const {isEdit} = this.state;

        return (
            <Row>
                <Col lg={{size: 6, offset: 3}}>
                    { !isEdit ? <RandomChar/> : null}                          
                    <button 
                        onClick={this.onSwitch} 
                        className="button-hide d-flex justify-content-center">
                        { !isEdit ? 'Hide' : 'Show'} 
                    </button>
                </Col>
            </Row>
        )
    }
}