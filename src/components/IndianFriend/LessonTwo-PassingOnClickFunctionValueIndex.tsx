import React from 'react'
import LessonTwoSide from './LessonTwoSide'

const LessonTwoMain = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        console.log('welcome welcome from main', e, index)
    }
    return (
        <div>
            <LessonTwoSide onMessage={handleClick} />
            <button className='bg-red-400' onClick={(e) => handleClick(e, 45)}>
                show message from Main
            </button>
        </div>
    )
}

export default LessonTwoMain