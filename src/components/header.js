import styles from "../styles/components/header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerMargin}>
                <div className={styles.buttonFlex}>
                    <div className={styles.title}>
                        <p className={styles.qiita}>Qiita</p>
                        <button className={styles.button}>▼</button>
                        <form action="#" method="post">
                            <input className={styles.keyward} placeholder="キーワードを入力してください" type="text" name="serch" />
                        </form>
                    </div>
                    <div>
                        <div className={styles.search}>
                            <button className={styles.user}>ユーザー登録</button>
                            <button className={styles.button2}>ログイン</button>
                        </div>
                    </div>
                </div>
                <div className={styles.yoko}>
                    <div className={styles.comment}>
                        <p className={styles.commentTitle}>How developers code is here</p>
                        <p className={styles.commentMargin}>Qiitaは、エンジニアリングに関する機能を記録・共有するためのサービスです。コードを書いていて気づいたことや、自分がハマったあの仕様についてハマったあの仕様について、他のエンジニアと知見を共有しましょう。</p>
                    </div>
                    <div className={styles.loginWaku}>
                        <div className={styles.login}>
                            <div className={styles.buttonFlex2}>
                                <button className={styles.github}>github</button>
                                <button className={styles.twitter}>Twitter</button>
                                <button className={styles.google}>Google</button>
                            </div>
                            <p className={styles.center}>QR</p>
                            <form className={styles.buttonMargin} action="#" method="post">
                                <div className={styles.userInput}>
                                    <p className={styles.userAbs}>ユーザー名</p>
                                    <input className={styles.input} placeholder="qiitan" type="text" name="username" />
                                </div>
                                <div className={styles.mailInput}>
                                    <p className={styles.mailAbs}>メールアドレス</p>
                                    <input className={styles.input} placeholder="qiitan@qiita.com" type="text" name="mailaddress" />
                                </div>
                                <div className={styles.passInput}>
                                    <p className={styles.passAbs}>パスワード</p>
                                    <input className={styles.input} placeholder="******" type="text" name="passward" />
                                </div>
                            </form>
                            <p className={styles.tyui}>8文字以上、英・数・記号が使えます</p>
                            <div className={styles.checkbox}>
                                <label>
                                    <input className={styles.agree} type="checkbox" name="agreement" />
                                    <a className={styles.agreeColor}><span className={styles.kiyaku}>利用規約</span>に同意する</a>
                                </label>
                                <br />
                                <label>
                                    <input className={styles.privacy} type="checkbox" name="privacy" />
                                    <a className={styles.privacyColor}><span className={styles.prai}>プライバシーポリシー</span>に同意する</a>
                                </label>
                                <br />
                                <div className={styles.robotWaku}>
                                    <label className={styles.robotLabel}>
                                        <input className={styles.robot} type="checkbox" name="nonrobot" />
                                        私はロボットではありません
                                    </label>
                                </div>
                                <br />
                                <button className={styles.signup}>登録する</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header