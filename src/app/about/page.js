import About from '@/about'
import React from 'react'
export async function generateMetadata({ params, searchParams }) {
  return {
    title: " About",
    description: "Most popular <strong> GPTs </strong> are at the <strong>top</strong>  of the GPT list to make it easy to navigate among <strong>2000+ GPTs</strong>",
    keywords:"Canva, YouTubeGPT, The_Sommelier, Sticker Whiz, Visual Weather Artist GPT, Grimoire, Magic Writer, The Negotiator, Sous Chef, AI Websites, SEO, Laundry Buddy, <small>  LifeOS,Logo Muse, Magic Writer, Logo Maker, Kraftful, LangGPT, Language Coach, Learn Creole, JavaScript Guru, Influencer Assistant, Interview Coach, img2img, Hot Mods</small> ,<strong>hive, homie</strong>"
  };
}
const page = () => {
  return (
    <div>
        <About/>
    </div>
  )
}

export default page