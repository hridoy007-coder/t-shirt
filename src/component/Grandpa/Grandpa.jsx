import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunti from '../Aunti/Aunti';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'dimond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunti ring={ring}></Aunti>
            </section>
        </div>
    );
};

export default Grandpa;