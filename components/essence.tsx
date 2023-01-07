import Image from 'next/image'

const Essence = ({ flow }) =>{
  return (
    <div className='mt-10'>
      <div className="text-center text-xl mb-3">🥵 糟粕区·群友风骚 🥵</div>
      <div className='flex flex-wrap  justify-center'>
        {
          flow.map((item:any)=>{
            return(
              <div key={item._id} className="flex items-center bg-red-300 m-2 p-3 rounded-full border-2 border-red-400">
                <Image src={item.avatar} 
                    width={30} 
                    height={30} 
                    alt={'avatar'}
                    className="rounded-full" />
                <div className='ml-2'>
                  {item.msg_content.map((item:any)=>{
                    if(item.msg_type === 1 && item.text.charAt(0)!=='@'){
                      return(
                        <span key={item._id} className="text-red-800 text-base">{item.text}</span>
                      )
                    }
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Essence