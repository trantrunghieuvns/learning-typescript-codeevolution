import React, { useEffect } from 'react'
import { useState } from 'react';
import { uuid } from 'uuidv4';

type ListProps = {
    index: number

    item: string
    arrayB: string[]
    items: string[]
    removedItems: string[]
    onClick: (value: string) => void
}

export const List = ({ items, onClick }: ListProps) => {
    let [phuItems, setPhuItems] = useState<string[]>([...items]);
    let [removedItems, setRemovedItems] = useState<string[]>([]);
    // listItems = items


    let arrayB: string[] = [];
    let [listItems, setListItems] = useState<string[]>(items);

    console.log('listItems :>> ', listItems);
    const deleteItem = (index: number) => {
        setRemovedItems(listItems.filter((a, e) => index === e))

        listItems.splice(index, 1)
        setListItems((listItems) => [...listItems])
        console.log('listItems', listItems)
    }
    return (
        <>
            <div>
                <h2>List of Items </h2>
                {listItems.map((item, index) => {
                    return (<>
                        <div key={index + 1 + index} onClick={() => {
                            deleteItem(index)

                        }}>{item}</div>
                    </>
                    )
                })
                }
                <div onClick={() => {

                    let longArray = items.concat(removedItems).concat(phuItems)
                    let uniqueString: string[] = [];
                    longArray.forEach((c) => {
                        if (!uniqueString.includes(c)) {
                            uniqueString.push(c);
                        }
                    });
                    setListItems(uniqueString)
                }}>Reset All</div>


            </div >
        </>
    )
}

export default List