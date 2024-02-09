import React from 'react';

export const Card = ({ image }) => {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure>
                <img className="object-fill w-full" src={image} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">INCUBUS ASIA TOUR 2024</h2>
                <p>23 April 2024</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-xs btn-success text-white">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};
