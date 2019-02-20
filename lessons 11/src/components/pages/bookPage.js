import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/getService';
import {withRouter} from 'react-router-dom';
import './pages.css'

class BookPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

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
            <div className="item-page">
                <ItemList 
                    onItemSelected={(itemId) => {
                        this.props.history.push(itemId)
                    }}
                    getData={this.gotService.getAllBooks}
                    renderItem={({name}) => `${name}`}/>
            </div>
        )
    }
}

export default withRouter(BookPage);