import './create-dog-page.css';

import React from 'react';

import Button from './../../Components/button/button.js';
import { Link } from 'react-router-dom';

import {CreateDogDomain} from '../../DomainModels/create-dog';

class CreateDogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
            sex: '',
            age: 1,
            description: '',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div className='create-dog-page'>
                <div className='create-dog-page-title'>СОЗДАТЬ СОБАКУ</div>
                <label>Имя</label>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    type='text'
                    name='name'
                    placeholder="Имя"
                />
                <label>Пол</label>
                <input
                    value={this.state.sex}
                    onChange={this.handleChange}
                    type='text' name='sex'
                    placeholder='Пол'
                />
                <label>Ссылка на каритнку</label>
                <input
                    value={this.state.img}
                    onChange={this.handleChange}
                    type='text' name='img'
                    placeholder='Ссылка на картинку'
                />
                <label>Возраст</label>
                <input
                    value={this.state.age}
                    onChange={this.handleChange}
                    type='number' name='age'
                    placeholder='Возраст'
                />
                <label>Описание</label>
                <input
                    value={this.state.description}
                    onChange={this.handleChange}
                    type='text' name='description'
                    placeholder='Описание собаки'
                />
                <div className='link'>
                    <Link to={`/main`}>
                        <Button type='red' text='СОЗДАТЬ' onClick={() => {
                            const createDogDomain = CreateDogDomain();
                            createDogDomain.createDog(this.dog);
                            createDogDomain.update();
                        }}/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default CreateDogPage;
