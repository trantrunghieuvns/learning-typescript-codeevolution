import React from 'react'

type PlaylistProps = {
    lang: {
        first: string;
        last: string;
    }[];
}

const One = ({ lang }: PlaylistProps) => {
    return (
        <>
            <h2>WE have playlist on following languages </h2>
            <div className='grid grid-cols'>
                {lang.map((item, index) => {
                    return (
                        <div>we have {index} item {item.first} & {item.last})</div>
                    )
                })}
            </div>
        </>
    )
}

export default One