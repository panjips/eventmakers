import React from 'react';

export const Container = ({ children }) => {
    return (
        <div className="max-w-80 md:max-w-xl lg:max-w-6xl m-auto ">
            {children}
        </div>
    );
};
