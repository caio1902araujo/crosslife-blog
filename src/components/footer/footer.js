import React from 'react';
import styles from './footer.module.css';
import Logo from '../logo/logo';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div>
          <h2><Logo /></h2>
          <p className={styles.description}>Somos uma empresa inovadora, que mistura o cross training e atividades funcionais, assim fazendo os nossos clientes atingirem seus objetivos em um curto período de tempo.</p>
          <ul className={styles.socialNetworks}>
            <li>
              <a href="https://www.facebook.com/CrossLifeFigueira/" target="_blank" rel="noopener noreferrer">      
                <Facebook/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/crosslifefigueira/" target="_blank" rel="noopener noreferrer">
                <Instagram/>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Mapa do Site</h2>
          <ul>
            <li><Link to="/categoria/academia" className={styles.listItem}>Academia</Link></li>
            <li><Link to="/categoria/esportes" className={styles.listItem}>Esportes</Link></li>  
            <li><Link to="/categoria/fitness" className={styles.listItem}>Fitness</Link></li>
            <li><Link to="/categoria/nutricao" className={styles.listItem}>Nutrição</Link></li>
            <li><Link to="/categoria/receitas" className={styles.listItem}>Receitas</Link></li>
            <li><Link to="/categoria/saude" className={styles.listItem}>Saúde</Link></li> 
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Crosslife Site</h2>
          <ul>
            <li><a href="/" className={styles.listItem}>Planos</a></li>
            <li><a href="/" className={styles.listItem}>Contato</a></li>  
            <li><a href="/" className={styles.listItem}>Sobre nós</a></li>
            <li><a href="/" className={styles.listItem}>Localização</a></li>
            <li><a href="/" className={styles.listItem}>Redes Sociais</a></li>
            <li><a href="/" className={styles.listItem}>Abra sua unidade</a></li>  
          </ul>
        </div>

        <div>
          <h2 className={styles.title}>Meios de contato</h2>
          <ul>
            <li className={styles.listItem}>
              <a href='tel:+5511930396438' className={styles.listItem}>
                (11) 93039-6438
              </a>
            </li>
            <li className={styles.listItem}>
              <a href='mailto:contato@bikcraft.com' className={styles.listItem}>
                crosslife.figueira@gmail.com
              </a>
            </li>  
            <li>
              <a href='https://www.google.com/maps/place/R.+Kaneji+Kodama,+1232+-+Vila+Figueira,+Suzano+-+SP,+08676-410/@-23.5499311,-46.3059147,3a,75y,300.38h,91.4t/data=!3m6!1e1!3m4!1sqDXRU1H3VYjOIcLueVtM2Q!2e0!7i16384!8i8192!4m5!3m4!1s0x94ce709f9802ef35:0x912e240603513c73!8m2!3d-23.5498988!4d-46.3060871' className={styles.listItem} target="_blank" rel="noopener noreferrer">
                R. Kaneji Kodama, 1232 - Vila Figueira, Suzano - SP, 08676-410
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.copy}>
          FiveTech  2021 - Todos os direitos autorais
        </div>
      </div>
    </footer>
  )
}

export default Footer;