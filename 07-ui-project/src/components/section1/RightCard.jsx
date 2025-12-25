
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 rounded-4xl overflow-hidden  relative'>
      <img className='h-full w-full object-cover' src={props.img}/>
        <RightCardContent id={props.id} intro={props.intro} tag={props.tag}/>
    </div>
  )
}

export default RightCard
