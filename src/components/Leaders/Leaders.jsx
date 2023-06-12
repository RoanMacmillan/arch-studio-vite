import React from 'react'
import leadersData from '../../../leaders.json'
import styles from './Leaders.module.css'
import twitter from '../../../public/images/icons/icon-twitter.svg';
import linkedin from '../../../public/images/icons/icon-linkedin.svg';
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver';

export default function Leaders() { 

  const [leadersContainerRef, leadersContainerVisible] = useIntersectionObserver();

  return (
    <div ref={leadersContainerRef} className={`${styles.leadersContainer} ${leadersContainerVisible ? 'fadeInLoad' : 'hidden' }`}>
      {leadersData.map((leader, index) => (
        <div className={styles.leadersChild} key={index}>
          <div className={styles.leadersImgWrapper}>
          <img className={styles.pfp} src={leader['profile image']} alt="Profile" />
          <div className={styles.socialContainer}>
          <img src={twitter} alt='Twitter icon' className={styles.twitter}></img>
          <img src={linkedin} alt='Twitter icon' className={styles.linkedin}></img>
        </div>
          </div>
          <h4>{leader.name}</h4>
          <p>{leader.role}</p> 
        </div>
      ))}
    </div>
  );
}
