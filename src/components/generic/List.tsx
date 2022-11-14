import React, { useEffect } from 'react'
import { useState } from 'react';

type ListProps = {
    index: number
    i: number
    item: string
    arrayB: string[]
    items: string[]
    removedItems: string[]
    onClick: (value: string) => void

}



export const List = ({ items, onClick }: ListProps) => {

    let [listItems, setListItems] = useState<string[]>([]);
    listItems = items
    console.log('full list', listItems);
    let removedItems: string[] = [];
    let arrayB: string[] = [];

    const deleteItem = (index: number) => {
        removedItems = items.slice(index, -index)
        arrayB.push(...arrayB.concat(removedItems))
        console.log('test', arrayB)
        setListItems(listItems.splice(index, 1))
        console.log('removed Items', removedItems);
    }

    return (
        <div>
            <h2>List of Items </h2>
            <div onClick={() => { console.log('sdasd', [...listItems, ...arrayB]) }}>Reset All</div>
            {listItems.map((item, index) => {
                return (<>
                    <div id='Input' key={index} onClick={() => deleteItem(index)}>{item}</div>
                </>
                )
            })}

        </div >
    )
}

export default List