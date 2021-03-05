import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spiner/spiner';
import Service from '../../services/service'
export default class ItemList extends Component {

    service = new Service();

    state = {
        charList: null
    }

    componentDidMount(){
        this.service.getAllCharacters()
            .then((charList) => {
                this.setState({
                    charList
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    renderItems(arr){
        return arr.map((item, i)=>{
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}
                    >
                    {item.name}
                </li>
            )
        })
    }
    
    render() {
    
        const {charList} = this.state;

        if(!charList){
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group mb-5">
                {items}
            </ul>
        );
    }
}