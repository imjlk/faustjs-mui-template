import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
import styles from 'scss/components/ScrollContents.module.scss';

type ScrollContent = {
  bgImage: (index: number) => string;
  text: string;
};
interface Props {
  data?: Array<ScrollContent>;
}

function ScrollContents({ data = [] }: Props): JSX.Element {
  const scrollContentText = useRef();
  useEffect(() => {
    console.log(scrollContentText.current);
  }, []);

  if (data.length === 0) {
    return <section className={styles['scroll-content']}>Empty</section>;
  }

  return (
    <section className={styles['scroll-content']}>
      <div className={styles['scroll-graphic']}>
        {data.map((elem, index) => (
          <div
            key={`graphic-${index}`}
            data-index={index}
            className={styles['graphic-item']}
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
