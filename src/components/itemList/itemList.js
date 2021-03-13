import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spiner/spiner';
export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount(){
        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            })
            .catch(err => {
                console.log(err)
            });
    }

    renderItems(arr){

        return arr.map((item, i)=>{
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(41 + i)}
                    >
                    {label}
                </li>
            )
        })
    }
    
    render() {
    
        const {itemList} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group mb-5">
                {items}
            </ul>
        );
    }
}