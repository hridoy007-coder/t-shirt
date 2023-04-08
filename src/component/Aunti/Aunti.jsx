import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunti = ({ring}) => {
    return (
        <div>
            <h2>Aunti</h2>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>kobir</Cousin>
            </section>
        </div>
    );
};

export default Aunti;