import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/getService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }    

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
            getData={this.gotService.getAllHouses}
            renderItem={({name}) => `${name}`}/>
        )
        
        const charDetails = (
            <CharDetails 
                itemId={this.state.selectedHouse}
                // plaseSelect={'Please select a house'}               
                getDataId={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overload' label='Overload'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}