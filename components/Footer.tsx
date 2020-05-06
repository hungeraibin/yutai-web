import styles from './Footer.module.css';
import { useState } from 'react';

function Footer() {
  const [isQRShow, setQRState] = useState(false);
  return (
    <footer className={styles.footer}>
      <section className={styles.concat}>
        <span className={styles.tit}>关注我们</span>
        <span className={styles.icon} onClick={() => setQRState(!isQRShow)}>
          <i className="iconfont weixin" />
          {isQRShow && <img src="/img/QR.jpg" alt="二维码" className={styles.qr} />}
        </span>
      </section>
      <section className={styles.copyright}>
        Copyright © 1998 - 2020 YuTai. All Rights Reserved. 豫泰公司 版权所有
      </section>
    </footer>
  );
}

export default Footer;
