import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMessage from '../errorMessage/errorMessage'
import CharacterPage from '../pages/characterPage/characterPage'
import Service from '../../services/service'
import BooksPage from '../pages/bookPage/bookPage'
import HousesPage from '../pages/housesPage/housesPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {

    service = new Service();

    state = {
        showRandomChar: true,
        error: false
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <Router>
                <div className='app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                onClick={this.toggleRandomChar} 
                                className="btn btn-primary mb-4">Toggle random Char</button>
                            </Col>
                        </Row>
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/books" component={BooksPage}/>
                        <Route path="/houses" component={HousesPage}/>
                    </Container>
                </div>
            </Router>
        );
    }
};