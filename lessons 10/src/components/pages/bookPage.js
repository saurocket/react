import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/getService';
import RowBlock from '../rowBlock';

export default class BookPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }    

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
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

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => `${name}`}/>
        )
        
        const charDetails = (
            <CharDetails 
                itemId={this.state.selectedBook}
                // plaseSelect={'Please select a book'}            
                getDataId={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}