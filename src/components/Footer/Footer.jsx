import React from 'react'
import './footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="facebook" />
        <img src={instagram_icon} alt="instagram" />
        <img src={twitter_icon} alt="twitter" />
        <img src={youtube_icon} alt="youtube" />
      </div>
      <ul>
        <li>Audiodeskrypcja</li>
        <li>Karty podarunkowe</li>
        <li>Relacje z inwestorami</li>
        <li>Warunki korzystania</li>
        <li>Informacje prawne</li>
        <li>Informacje o firmie</li>
        <li>Ustawienia reklam</li>
        <li>Centrum pomocy</li>
        <li>Media Center</li>
        <li>Praca</li>
        <li>Prywatność</li>
        <li>Ustawienia plików cookie</li>
        <li>Skontaktuj się z nami</li>
      </ul>
      <p className='copyright-text'>© 1997–2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer