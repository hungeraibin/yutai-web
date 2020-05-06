import styles from './Home.module.css';
import Slider from 'react-slick';
import { AppProps } from 'next/app';

interface props {
  phoneStatus: boolean;
}

function Home({ phoneStatus }: props) {
  const settings = {
    pauseOnHover: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main>
      <section className={styles.video}>
        <video
          width="100%"
          autoPlay
          loop
          preload="true"
          muted
          src={phoneStatus ? '/video/building-phone.mp4' : '/video/building-computer.mp4'}
        />
        <p className={styles.slogan}>致力保障 {phoneStatus && <br />}打造温馨</p>
      </section>
      <section className={styles.descript}>
        <p className={styles.content}>
          豫泰是一家以保温工程为基础的建筑公司，
          <br />
          通过技术保障用户的质量，助力每个家庭的温馨。
          <br />
          我们的使命是“安全为基 质量为本”。
        </p>
      </section>
      <section className={styles.about}>
        <ul className={styles.details}>
          <li className={styles.company}>
            <p>公司简介</p>
          </li>
          <li className={styles.develop}>
            <p>发展历程</p>
          </li>
          <li className={styles.place}>
            <p>办公地点</p>
          </li>
        </ul>
      </section>
      <section className={styles.business}>
        <Slider {...settings}>
          <div className={styles.material}>
            <img src="/img/material_1.gif" alt="保温建材1" />
          </div>
          <div className={styles.material}>
            <img src="/img/material_2.jpg" alt="保温建材2" />
          </div>
          <div className={styles.material}>
            <img src="/img/material_3.jpg" alt="保温建材3" />
          </div>
        </Slider>
        <h3 className={styles.instruction}>
          <p className={styles.tip}>
            服务
            <br />
            安全与保障
          </p>
          <p className={styles.subtip}> 满载真诚，致力工程</p>
        </h3>
      </section>
    </main>
  );
}

export default Home;
