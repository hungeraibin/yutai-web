import styles from "./About.module.css";

function Home() {
  return (
    <main>
      <section className={styles.company}>
        <h3 className={styles.title}>公司简介</h3>
        <h4 className={styles.subtitle}>豫泰以诚意建设温暖港湾。</h4>
        <p className={styles.desc}>通过技术打造每一个温暖的住宅，伴随着辛勤与汗水。</p>
        <p className={styles.desc}>我们大力投资建筑材料，保证安全与质量。</p>
        <p className={styles.desc}>豫泰公司于 2008年1月 在中国天津成立。</p>
      </section>
    </main>
  );
}

export default Home;
