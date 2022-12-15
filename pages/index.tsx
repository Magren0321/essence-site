import Rank from '../components/rank'
import Essence from '../components/essence'
import Annual from '../components/annual'
import Image from 'next/image'
import family from '../assets/imgs/family.jpg'


const Home = ({ data }) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className="font-mono text-3xl text-center mt-8">渊· <s>精华</s> 糟粕 🤬</h1>
      <Rank rank={data.rank} ></Rank>
      <Annual></Annual>
      <Essence flow={data.essence}></Essence>
      <div className='w-full h-auto relative mt-10'>
        <Image src={family}
          alt={'family'} />
        <div className='text-center font-bold text-xl'>洞渊幸甚有你 <s>难玩十倍</s></div>
        <div className='text-center mt-3'>Made by 我为 and build with love💖</div>
      </div>
    </div>
  )
}


export const getServerSideProps = async (content:any) =>{
  const baseUrl = `http://localhost:3030`
  const requestRank = await fetch(baseUrl+`/rank`)
  const requestEssence = await fetch(baseUrl+`/getRandomEssence`)
  
  const resultRank = await requestRank.json()
  const resultEssence = await requestEssence.json()

  const {data:{ rank }} = resultRank
  const {data:{essence}} = resultEssence

  return { props:{
    data:{
      rank: rank.slice(0,(rank.length > 10 ? 10 : rank.length)),
      essence
    }
  } }
}

export default Home