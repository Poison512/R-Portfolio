import React from 'react'
import './portfolio.css'


const data = [
  {
    id:1 ,
    // image: IMG1,
    title: 'DRAGONS AND CHATS ',
    github: 'https://github.com/Kaysie04/Project-2-DRAGONS-CHATS',
    demo: 'https://dragons-chat-final.herokuapp.com'
  },
  {
    id:2 ,
    // image: IMG1,
    title: 'NATIONAL PARK WEATHER APP ',
    github: 'https://github.com/Kaysie04/Project-1',
    demo: 'https://kaysie04.github.io/Project-1/'
  },
  {
    id:3 ,
    // image: IMG1,
    title: 'README GENERATOR ',
    github: 'https://github.com/Poison512/readme-gen',
    demo: 'https://drive.google.com/file/d/1sbMVjmm5etKW90WZz3QiMA3UW3Lan_6L/view'
  }
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY RECENT PROJECTS</h5>
      <h2>PORTFOLIO</h2>

      <div className='container portfolio-container'>
        {
          data.map(({ id, image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio-item'>
          <div className='portfolio-item-image'></div>
          <img src={image}/>
          <h3>{title}</h3>
          <div className="portfolio-item-cta">
            <a href={github} className='btn'>GITHUB</a>
          <a href={demo} className='btn btn-primary'>LIVE DEMO</a>
          </div>
        </article>
            )
          })
        }

      </div>
      </section>
  )
}
export default Portfolio