import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
import styles from 'scss/components/ScrollContents.module.scss';

type ScrollContent = {
  bgImage: (index: number) => string;
  text: string;
  // isVisible: boolean;
};
interface Props {
  data?: Array<ScrollContent>;
}

function ScrollContents({ data = [] }: Props): JSX.Element {
  const scrollContentRef = useRef();

  useEffect(() => {
    const elem = scrollContentRef.current as HTMLElement;
    const graphics = elem.querySelectorAll('div > div');
    const texts = elem.querySelectorAll('div > p');
    let currentGraphic = graphics[0];
    let boundingRect = null;
    graphics[0].classList.add('visible');

    window.addEventListener('scroll', (e) => {
      texts.forEach((text: HTMLElement) => {
        boundingRect = text.getBoundingClientRect();
        if (
          boundingRect.top > window.innerHeight * 0.1 &&
          boundingRect.top < window.innerHeight * 0.8
        ) {
          if (currentGraphic) {
            currentGraphic.classList.remove('visible');
          }
          currentGraphic = graphics[text.dataset.index];
          currentGraphic.classList.add('visible');
        }
      });
    });
  }, []);

  if (data.length === 0) {
    return <section className={styles['scroll-content']}>Empty</section>;
  }

  return (
    <section className={styles['scroll-content']} ref={scrollContentRef}>
      <div className={styles['scroll-graphic']}>
        {data.map((elem, index) => (
          <div
            key={`graphic-${index}`}
            data-index={index}
            className={[
              styles['graphic-item'],
              // elem.isVisible === true ? styles.visible : '',
            ].join()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles['scene-img']}
              src={elem.bgImage(index)}
              alt=''
            />
          </div>
        ))}
      </div>
      <div className={styles['scroll-text']}>
        {data.map((elem, index) => (
          <p key={`text-${index}`} data-index={index}>
            {elem.text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ScrollContents;
