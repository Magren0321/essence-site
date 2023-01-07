import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Rank = ({rank}) =>{
  const [getList, setList] = useState(rank)

  useEffect(()=> {
    if(window.innerWidth<1024){
      setList(rank.slice(0,3))
    }
 }, [rank])
 

  return(
    <div>
      <Head>
        <title>渊·糟粕</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='text-center mt-10 font-bold italic text-lg text-gray-600'>
        天不生我 <span className='text-2xl text-red-800'>{getList[0][1].name}</span> ，糟粕万古如长夜
      </div>
      <div className='flex flex-row-reverse justify-center mt-10 '>
        {getList.map((item: any,index:number) => {
            return (
              <div key={item} className="mx-5 flex flex-col items-center justify-end">
                <Image src={item[1].avatar} 
                  width={((getList.length-index)<4?4:getList.length-index)*10} 
                  height={((getList.length-index)<4?4:getList.length-index)*10} 
                  alt={'avatar'}
                  className="rounded-full" />
                <div className='mt-5 flex flex-col items-center'>
                  <div className={setHeight(index)}></div>
                  <div className='mt-3'>{item[1].value}</div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  )
}

const setHeight = (num: number) =>{
  const heightMap = ['h-64','h-52','h-40','h-32','h-28','h-20','h-16','h-14','h-12','h-10']
  return `${heightMap[num]} w-10 bg-red-600`
} 


export default Rank