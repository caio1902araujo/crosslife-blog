import React from 'react';
import styles from './article.module.css';
import ListRow from '../listRow/listRow';
import AuthorCard from '../authorCard/authorCard';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

const socialNetworksListItems = [
  {
    content: <Facebook/>,
    link: {
      href: "https://www.facebook.com/CrossLifeFigueira/",
      isExternalLink: true,
      ariaLabel: "compartilhar no facebook",
    }
  },
  {
    content: <Twitter/>,
    link: {
      href: "https://www.instagram.com/crosslifefigueira/",
      isExternalLink: true,
      ariaLabel: "compartilhar no twitter",
    }
  }
]


const Article = () => {
  return (
    <article className={styles.container}>
      <div className={styles.wrapper}>

        <header className={styles.header}>
          <h1 className={styles.title}>Neymar fica triste por ter perdido 2kg de whey após ter dormido</h1>
          <h2 className={styles.subtitle}>Neymar fica extremamente descontente com a perda do seu shaike diário depois do seu treino, lamentamos por ele.</h2>
          <p>por <span className={styles.name}>Yudi Yoshimine</span> - há 2 horas</p>
        </header>

        <div className={styles.image}>
          <img src='https://tntsports.com.br/__export/1598302591703/sites/esporteinterativo/img/2020/08/24/gettyimages-1228174805-594x594_2.jpg_253672734.jpg' alt='neymar chorando'/>
        </div>
        
        <p className={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <p className={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>

        <section className={styles.share}>
          <ListRow listItems={socialNetworksListItems} typeStyle="secondary"/>
          <span className={styles.category}>esportes</span>
        </section>

        <AuthorCard author="Yudi Yoshimine" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type an"/>
      </div>
      
    </article>
  )
}

export default Article