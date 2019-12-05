import './dog-preview.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Button from './../../Components/button/button.js';

import { AdminDomain } from '../../DomainModels/admin';

class DogPreview extends React.Component {
    render() {
        const { id, isAdmin,handleChange } = this.props;
        const { img, name, sex, age, description } = this.props.dog;

        return (

            <div className='dog-preview'>
                <Link to={`/dog/${id}`} className='link'>
                    <div className='dog-img'>
                        <img src={`${img}`} width={700} height={700}></img>
                    </div>
                    <div className='dog-info'>
                        <div className='dog-name'>
                            {name}
                        </div>
                        <div className='dog-about'>
                            <div className='dog-sex'>
                                {sex}
                            </div>
                            <div className='dog-age'>
                                {age}
                            </div>
                        </div>
                    </div>
                    <div className='dog-description'>
                        {description}
                    </div>
                </Link>
                {isAdmin && <Button type='red' text='УДАЛИТЬ' onClick={() => {
                    const adminDomain = new AdminDomain(id)
                    adminDomain.deleteDog();
                    handleChange();
                    AdminDomain.update();
                }
                } />}
            </div>

        );
    }
}

export default DogPreview;
