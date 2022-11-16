import React, { useEffect } from 'react'
import { useState } from 'react';
import { uuid } from 'uuidv4';

type ListProps = { items: string[] }


export const List = ({ items }: ListProps) => { // must declare if items is outside scope
    let [phuItems, setPhuItems] = useState(items);
    let [listItems, setListItems] = useState(items);

    const deleteItem = (index: number) => {
        // setGetRemovedItems(listItems.filter((a, e) => index === e)) *2*
        listItems.splice(index, 1)
        setListItems([...listItems])
    }

    const handleClick = () => {
        let uniqueString: string[] = [];
        items.concat(phuItems).forEach((c) => {
            if (!uniqueString.includes(c)) {
                uniqueString.push(c);
            }
            setListItems(uniqueString);
        });
    }

    return (
        <>
            <div>
                <h2 className='p-3'>List of Items </h2>
                {listItems.map((item, index) => {
                    return (
                        <>
                            <div key={index} onClick={() => {
                                deleteItem(index)
                            }}>{item}</div>
                        </>
                    )
                })
                }
                <div className='bg-gray-400 rounded-lg p-3' onClick={handleClick //or () => handleClick()
                }>Reset All</div>
            </div >
        </>
    )
}

export default List