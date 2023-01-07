import Rank from '../components/rank'
import Essence from '../components/essence'
import Annual from '../components/annual'
import Image from 'next/image'
import Head from 'next/head'
import family from '../assets/imgs/family.jpg'


const Home = ({ data }) => {
  return (
    <div className='flex flex-col items-center animate-zoomIn'>
      <Head>
        <title>渊·糟粕</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="font-mono text-3xl text-center mt-8">渊· <s>精华</s> 糟粕 🤬</h1>
      <Rank rank={data.rank}></Rank>
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
  const requestRank = await fetch(process.env.DB_HOST+ `/rank`)
  const requestEssence = await fetch(process.env.DB_HOST+`/getRandomEssence`)
  
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