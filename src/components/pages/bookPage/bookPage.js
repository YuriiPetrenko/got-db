import React, {Component} from 'react';
import ItemList from '../../itemList/itemList';
import ItemDetails,{Field} from '../../itemDetails/itemDetails'
import ErrorMessage from '../../errorMessage/errorMessage';
import Service from '../../../services/service';
import RowBlock from '../../rowBlock/rowBlock'

export class BooksPage extends Component {
    service = new Service();

    state = {
        selectedBook: null,
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
                  return <ErrorMessage/>
              }
      
              const itemList = (
                  <ItemList 
                      onItemSelected={this.onItemSelected}
                      getData={this.service.getAllBooks}
                      renderItem={({name}) => name}/>
              )
      
              const itemDetails = (
                  <ItemDetails
                  itemId={this.state.selectedBook}
                  getData={this.service.getBook} >
                           <Field field='numberOfPages' label='Number of pages'/>
                           <Field field='publisher' label='Publisher'/>
                           <Field field='released' label='Released'/>
                  </ItemDetails>
              )
      
              return (
                 <RowBlock left={itemList} right={itemDetails} />
              )
    }
}
export default BooksPage;