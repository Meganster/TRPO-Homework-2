import './dog-page.css'

import React from 'react';
import DogPreview from './../../Components/dog-preview/dog-preview.js';

import {FeedDomain} from '../../DomainModels/feed'

class DogPage extends React.Component {
    state = {
        dog: {
            img: '', name: '', sex: '', age: '', description: '',
        }
    };
    componentDidMount() {
        const feedDomain = new FeedDomain(this.props.id);
        FeedDomain.getDog().then(dog => this.setState({ dog }))
    }

    render() {

        return (
            <div className='dog-page'>
                <DogPreview dog={this.state.dog} />
            </div>
        );
    }
}

export default DogPage;