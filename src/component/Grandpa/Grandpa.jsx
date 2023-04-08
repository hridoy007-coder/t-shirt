import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunti from '../Aunti/Aunti';
import './Grandpa.css'

export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'dimond';
    const [money, setMoney] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>money: {money}</p>
            <MoneyContext.Provider value= {[money, setMoney]}>
                <RingContext.Provider value='golder-ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunti ring={ring}></Aunti>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*
1. create context
2.create a provider and pass a value
3. use useContext and to received value
*/ 