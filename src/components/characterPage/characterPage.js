import React, {Component} from 'react';
import ItemList from '../itemList/itemList';
import CharDetails, {Field} from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage/errorMessage'
import Service from '../../services/service'
import RowBlock from '../rowBlock/rowBlock'

export default class CharacterPage extends Component{

    service = new Service();
    
    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })

    }

    render(){

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.service.getAllCharacters}
                renderItem = {({name, gender})=> `${name} (${gender})`}
            />
        )
        
        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}