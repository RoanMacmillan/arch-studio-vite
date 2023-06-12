import React from 'react'
import images from '../../../data.json'
import styles from './Thumbnail.module.css'
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver'

const Thumbnail = () => {


  const [thumbnailContainerRef, thumbnailContainerVisible] = useIntersectionObserver();

  return (
    <div ref={thumbnailContainerRef} className={`${styles.thumbnailContainer} ${thumbnailContainerVisible ? 'fadeInLoad' : 'hidden'}`}>
      {images.map((image) => (
        <div className={styles.thumbWrapper} key={image.name}>
          <img className={styles.mobileImg} src={image.mobile} alt={image.name} />
          <img className={styles.tabletImg} src={image.tablet} alt={image.name} />
          <img className={styles.desktopImg} src={image.desktop} alt={image.name} />

          <h2>{image.title}</h2>
          <span>{image.description}</span>  
        </div>
      ))}
    </div>
  )
}

export default Thumbnail
