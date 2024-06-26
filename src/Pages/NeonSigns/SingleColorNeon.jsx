import React from 'react'
import AboutBanner from '../../Components/AboutusComponents/AboutBanner'
import NeonDesc from '../../Components/NeonSignComponents/NeonDesc'
import CreativeConcept from '../../Components/HomeComponents/CreativeConcept'

const SingleColorNeon = () => {
    const  links = [
        {
            link: "https://www.youtube.com/embed/0xhlJQIKizg?list=TLGGGLM64r5s4tYyNjA2MjAyNA"
        },
        {
            link: "https://www.youtube.com/embed/84yd-JOzCpg?list=TLGG3wVjnlp60dUyNjA2MjAyNA"
        },
        {
            link: "https://www.youtube.com/embed/Rrzmt3lQhB0?list=TLGGpFI89FebMrMyNjA2MjAyNA"
        },
        {
            link: "https://www.youtube.com/embed/e7O5MUz4taE?list=TLGGis67Wxwr9hAyNjA2MjAyNA"
        },
        {
            link: "https://www.youtube.com/embed/-YSgcg4xPbY?list=TLGGZwzZ1GuRUNEyNjA2MjAyNA"
        },//
        {
            link: "https://www.youtube.com/embed/C3hbje1E9ks?list=TLGGjcKSWvxkWTUyNjA2MjAyNA"
        },
        {
            link: "https://www.youtube.com/embed/KjamB7KitC4?list=TLGGywqUJatt-y0yNjA2MjAyNA"
        }
    ]
  return (
    <div>
      <AboutBanner head="Neon Sign" sub_head="Neon Sign"/>
      <NeonDesc 
      head="Singlecolor Neon"
      p1="When you hear the words ‘neon lights’, the first things that come to your mind are storefront signs. Neon lights ideal for the advertising industry because they can easily catch the attention of passersby. Neon lights usually come in the form of glass tubes which you can fabricate in different artistic shapes to create pictures of letters. They are popularly used in making multicolored and dramatic signages for advertising, widely known as neon signs."
      p2=""  
      links={links}  
      />
      <CreativeConcept/>
    </div>
  )
}

export default SingleColorNeon
