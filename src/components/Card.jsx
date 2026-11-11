import React from 'react';

const Card = ({elem}) => {
    return (
        <div key={elem.id} className="rounded-lg overflow-hidden shadow-lg">
            <img
                src={elem.download_url}
                alt={elem.author}
                className="w-full h-48 object-cover"
                loading="lazy"
            />
            <p className="p-2 text-sm text-gray-300 text-center font-medium">
                {elem.author}
            </p>
        </div>
    );
}

export default Card;

