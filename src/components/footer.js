import styles from "../styles/components/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFlex}>
                <div className={styles.foot}>
                    <p className={styles.footQiita}>Qiita</p>
                    <p className={styles.footComment}>How developers code is here.</p>
                </div>
                <div className={styles.footFlex}>
                    <div className={styles.footTitle}>
                        <p className={styles.aboutTitle}>Qiita</p>
                        <p className={styles.incrementsTitle}>Increments</p>
                    </div>
                    <div className={styles.finFlex}>
                        <div className={styles.aboutFlex}>
                            <div className={styles.about}>
                                <p className={styles.under}>About</p>
                                <p className={styles.under}>利用規約</p>
                                <p className={styles.under}>プライバシー</p>
                                <p className={styles.under}>ガイドライン</p>
                                <p className={styles.under}>デザインガイドライン</p>
                            </div>
                            <div className={styles.release}>
                                <p className={styles.under}>リリース</p>
                                <p className={styles.under}>API</p>
                                <p className={styles.under}>ご意見</p>
                                <p className={styles.under}>ヘルプ</p>
                                <p className={styles.under}>広告掲載</p>
                            </div>
                        </div>
                        <div className={styles.incrementsFlex}>
                            <div className={styles.increments}>
                                <p className={styles.under}>About</p>
                                <p className={styles.under}>採用情報</p>
                                <p className={styles.under}>ブログ</p>
                            </div>
                            <div className={styles.qiitaOther}>
                                <p className={styles.under}>Qiita Team</p>
                                <p className={styles.under}>Qiita Jobs</p>
                                <p className={styles.under}>Qiita Zine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer