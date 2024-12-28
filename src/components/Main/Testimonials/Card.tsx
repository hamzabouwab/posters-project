import {Quote} from 'lucide-react'

function Card({img,text,name}:{img:string,text:string,name:string}) {
  return (
    <div className="card-testimonials text-start mb-4 flex flex-col justify-around">
        <div className="card-header">
        <Quote className='text-green-800 fill-green-800 rotate-180 mb-4 size-7'  />
        <p className='leading-7 text-[#585858] font-medium mb-5'>{text}</p>
        </div>
        <div className="card-body">
            <img src={img} className='w-10 aspect-square rounded-full mb-5' alt="" />
            <p className='tracking-widest uppercase font-bold text-sm'>{name}</p>
        </div>
    </div>
  )
}

export default Card