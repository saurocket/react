import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage, BooksItem, HomePage} from '../pages';
import gotService from '../../services/getService';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

export default class App extends Component {   
    
    gotService = new gotService();
    
    state = {
        isEdit: false,
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    
    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Route path='/' exact component={HomePage} />                        
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/houses' component={HousePage} />
                        <Route path='/books' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                            return <BooksItem bookId={id}/>}
                        } />      
                    </Container>
                </div>
            </Router>
        );
    }
};
