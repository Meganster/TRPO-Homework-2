import './main-page.css';

import React from 'react';
import DogPreview from './../../Components/dog-preview/dog-preview.js';

import { FeedDomain } from '../../DomainModels/feed';

class MainPage extends React.Component {
    state = {
        dogs: [],
        keys: [],
    };
    componentDidMount() {
        FeedDomain.getAllDogs().then(({ dogs, keys }) => this.setState({ dogs, keys }))
    }
    handleChange = () => {
        FeedDomain.getAllDogs().then(({ dogs, keys }) => this.setState({ dogs, keys }))
    }
    render() {

        return (
            <div className='main-page'>
                {
                    this.state.keys.map(key => (
                        <DogPreview dog={this.state.dogs[key]} id={key} isAdmin={this.props.isAdmin} handleChange={this.handleChange}/>
                    ))
                }
            </div>
        );
    }
}

export default MainPage;
