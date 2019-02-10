import React, {Component} from 'react';
import './itemList.css';

import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';
export default class ItemList extends Component {

    state = {
        itemList: null,
        error: false
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
        .then( (itemList) => {
            this.setState({
                itemList
            })
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const id = /[^/]*$/.exec(item.url)[0];
            const label = this.props.renderItem(item);
            return (
                <li 
                    key= {id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                        {label}
                </li>
            )
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        const {itemList} = this.state;        

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);


        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}