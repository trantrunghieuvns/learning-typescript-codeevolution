import React from 'react'

type MessageProps = {
  onMessage: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => void;
}
// const handleClick = () => {
//   console.log('welcome welcome from side ')
// }
const LessonTwoSide = (props: MessageProps) => {

  return (
    <div>
      Event props in react typescript
      <button onClick={(e) => props.onMessage(e, 231)} className='bg-slate-400'>show message from side</button>
    </div>
  )
}

export default LessonTwoSide