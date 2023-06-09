import React, {useState, useEffect} from 'react'
import images from '../../../data.json'
import styles from './Thumbnail.module.css'

const Thumbnail = () => {

  const [delays, setDelays] = useState([]);

  useEffect(() => {
    // Set an initial delay of 0 for the first image
    let newDelays = [0];

    // Add an incremental delay for each subsequent image
    for (let i = 1; i < images.length; i++) {
      newDelays.push(i * 250); // 300ms delay between each image
    }

    setDelays(newDelays);
  }, []);

  return (
    <div className={styles.thumbnailContainer}>
      {images.map((image, index) => (
        <div 
          className={styles.thumbWrapper} 
          key={image.name}
          style={{
            animation: `fadeIn 1s ${delays[index]}ms forwards`,
            opacity: 0,
          }}
        >
          <img className={styles.mobileImg} src={image.mobile} alt={image.name} />
          <img className={styles.tabletImg} src={image.tablet} alt={image.name} />
          <img className={styles.desktopImg} src={image.desktop} alt={image.name} />
  
          <h2>{image.title}</h2>
          <span>{image.description}</span>  
        </div>
      ))}
    </div>
  );
  
}

export default Thumbnail
