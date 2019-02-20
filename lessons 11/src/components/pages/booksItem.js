import React, {Component} from 'react';
import gotService from '../../services/getService';
import ItemDetails, {Field} from '../itemDetails';
import './pages.css'

export default class BooksItem extends Component {

    gotService = new gotService();
    render() {
        return (
            <div className="item-page">
                <ItemDetails 
                    itemId={this.props.bookId}
                    plaseSelect={'Please select a book'}
                    getDataId={this.gotService.getBook}>
                    <Field field='numberOfPages' label='Number of pages'/>
                    <Field field='publiser' label='Publiser'/>
                    <Field field='released' label='Released'/>
                </ItemDetails>
            </div>
        )
    }
}