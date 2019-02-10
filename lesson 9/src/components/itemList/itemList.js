import React, {Component} from 'react';
import './itemList.css';

import gotService from '../../services/getService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null,
        error: false
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
        .then( (charList) => {
            this.setState({
                charList
            })
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={/[^/]*$/.exec(item.url)[0]}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                        {item.name}
                </li>
            )
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const {charList} = this.state;        

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);


        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}