import Image from 'next/image'
import { useEffect, useState } from 'react'

const Rank = ({rank}) =>{
  const [getList, setList] = useState(rank)
  const [fade,setFade] = useState(false)

  useEffect(()=> {
    if(window.innerWidth<1024){
      setList(rank.slice(0,3))
    }
    setTimeout(()=>{
      setFade(true)
    },1000)
 }, [rank])

  const initRankClass = () =>{
    return `transition-height duration-700 h-0 w-10 bg-red-600`
  }

  const setHeight = (num: number) =>{
    const heightMap = ['h-64','h-52','h-40','h-32','h-28','h-20','h-16','h-14','h-12','h-10']
    return `transition-height duration-700 ${heightMap[num]} w-10 bg-red-600`
  } 

  const setSize = (num: number) =>{
    return (getList.length-num) < 4 ? 40 : ((getList.length-num)*10)
  }

 

  return(
    <div>
      <div className='text-center mt-10 font-bold italic text-lg text-gray-600'>
        天不生我 <span className='text-2xl text-red-800'>{getList[0][1].name}</span> ，糟粕万古如长夜
      </div>
      <div className='flex flex-row-reverse justify-center mt-10 '>
        {getList.map((item: any,index:number) => {
            return (
              <div key={item} className="mx-5 flex flex-col items-center justify-end">
                <Image src={item[1].avatar} 
                  width={fade?setSize(index):0} 
                  height={fade?setSize(index):0} 
                  alt={'avatar'}
                  className="rounded-full transition-width duration-700 " />
                <div className='mt-5 flex flex-col items-center'>
                  <div className={ fade ? setHeight(index) : initRankClass() }></div>
                  <div className='mt-3'>{item[1].value}</div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}


export default Rank