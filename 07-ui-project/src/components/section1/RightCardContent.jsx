import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h1 className='bg-white text-3xl rounded-full h-12 w-12 justify-center items-center font-semibold flex'>{props.id + 1}</h1>
        <div>
          <p className='text-lg text-white mb-14 leading-relaxed'>{props.intro}</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'><ArrowRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
