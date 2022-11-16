import React, { useState } from 'react'

const nameCList = [
    {
        id: 2,
        name: 'hiếu',
        coin: 12,
    },
    {
        id: 1,
        name: 'Be hiếu',
        coin: 12,
    },
    {
        id: 3,
        name: 'Bashiếu',
        coin: 12,
    },
    {
        id: 4,
        name: 'Be zhiếuk',
        coin: 12,
    },
    {
        id: 7,
        name: 'Be zsoo',
        coin: 3,
    },
];

const Test = () => {
    const [listItems, setListItems] = useState(nameCList);

    const deleteItem = (index: number) => {
        // setGetRemovedItems(listItems.filter((a, e) => index === e)) *2*
        listItems.splice(index, 1)
        setListItems([...listItems])
    }

    return (
        <>
            {
                listItems.map((item, index) => {
                    return <>
                        <div key={index} onClick={() => {
                            deleteItem(index,)
                        }}>{`tổng là ${item.id}`}{item.name}{item.coin}
                        </div>
                    </>
                }
                )
            }
        </>
    )
}

export default Test