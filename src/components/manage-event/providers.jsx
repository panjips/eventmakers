'use client';
import React, { useState, createContext } from 'react';

export const InputContext = createContext();

export default function Provider({ children }) {
    const [event, setEvent] = useState({
        title: '',
        date: '',
        image: '',
        description: ''
    });
    const [isEdit, setIsEdit] = useState(false);

    return (
        <InputContext.Provider value={{ event, isEdit, setEvent, setIsEdit }}>
            {children}
        </InputContext.Provider>
    );
}
