import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';
import ErrorMessage from '../../errorMessage/errorMessage'
import Service from '../../../services/service'
import RowBlock from '../../rowBlock/rowBlock'


export default class CharacterPage extends Component{

    service = new Service();
    
    state = {
        selectedChar: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.service.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={this.state.selectedChar}
            getData={this.service.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}