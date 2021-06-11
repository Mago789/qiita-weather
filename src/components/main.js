import { useState } from "react"
import styles from "../styles/components/main.module.css"
import weather from "./weather.js"
// import advImg1 from "../../public/images/hoge.jpeg"
// import advImg2 from "../components/header.js"

const Main = () => {
    const [count,setCount] = useState();
    return (
        <main className={styles.main}>
            <div className={styles.mainNaka}>
                <div className={styles.mainFlex}>
                    <div>
                        <p className={styles.hovTit}>記事フィード</p>
                        <p className={styles.trend}>トレンド</p>
                    </div>
                    <div className={styles.border}>
                        <hr className={styles.borderHiku} />
                    </div>
                    <div className={styles.qFeed}>
                        <p className={styles.hovTit}>質問フィード</p>
                        <p className={styles.hover}>↗️トレンド</p>
                        <p className={styles.hover}>？回答募集中</p>
                        <p className={styles.hover}>⬇︎新着</p>
                    </div>
                </div>
                <div className={styles.trendArticle}>
                    <div className={styles.trendTitle}>
                        <div className={styles.trendFlex}>
                            <p className={styles.trendWard}>↗️トレンド</p>
                            <p className={styles.trendComment}>最近の記事を毎日5時/17時に更新</p>
                        </div>
                        <div className={styles.taguFlex}>
                            <p className={styles.tagu1}>全て</p>
                            <p className={styles.tagu}>タグ</p>
                            <button className={styles.weather}　onClick={() => setCount(weather)}>天気</button>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@shinkai_が<span className={styles.articleColor}>2021年4月26日に投稿</span></p>
                        <p className={styles.articleMain}>(新人教育)新人エンジニアに意識して欲しい15のこと</p>
                        <div className={styles.articleTagu}>
                            <p>初心者,</p>
                            <p>新人教育,</p>
                            <p>スキルアップ,</p>
                            <p>新人プログラマ応援</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@KLaboratoryが<span className={styles.articleColor}>2021年4月25日に投稿</span></p>
                        <p className={styles.articleMain}>Visual Studio Codeの穴場拡張機能</p>
                        <div className={styles.articleTagu}>
                            <p>VSCode,</p>
                            <p>VisualStudioCode</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@Misato0122が<span className={styles.articleColor}>2021年4月26日に投稿</span></p>
                        <p className={styles.articleMain}>(個人開発)ポモドーロテクニックとTodoリストを組み合わせた時間管理アプリを作りました</p>
                        <div className={styles.articleTagu}>
                            <p>Ruby,</p>
                            <p>Rails,</p>
                            <p>ポートフォリオ</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@rana_kualuが<span className={styles.articleColor}>2021年4月26日に投稿</span></p>
                        <p className={styles.articleMain}>Google Chromeが勧める広告技術FLoCのまとめ</p>
                        <div className={styles.articleTagu}>
                            <p>Chorme,</p>
                            <p>google,</p>
                            <p>cookie,</p>
                            <p>広告,</p>
                            <p>FLoC</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>miizuunooが<span className={styles.articleColor}>2021年4月26日に投稿</span></p>
                        <p className={styles.articleMain}>GASでPageSpeed Insights　APIを使い定期的にSpeedIndexを測定</p>
                        <div className={styles.articleTagu}>
                            <p>gas,</p>
                            <p>spreadsheet,</p>
                            <p>SEO,</p>
                            <p>PageSpeedInsights</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@kazama1209が<span className={styles.articleColor}>2021年04月28日</span></p>
                        <p className={styles.articleMain}>Next.js*TypeScript*microCMSでシンプルなコーポレートサイトを作ってみる</p>
                        <div className={styles.articleTagu}>
                            <p>TypeScript,</p>
                            <p>React,</p>
                            <p>material-ul,</p>
                            <p>next.js,microCMS</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@a_jikeが<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>Proxyanを使う!</p>
                        <div className={styles.articleTagu}>
                            <p>iOS,</p>
                            <p>debug,</p>
                            <p>Web,</p>
                            <p>Charies,Proxyman</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@standard-softwareが<span className={styles.articleColor}>2021年4月26日に投稿</span></p>
                        <p className={styles.articleMain}>JavaScript 環境ならどこでも使えそうな短いコードの日付書式出力関数。コピペ用。</p>
                        <div className={styles.articleTagu}>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@tamsco274が<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>入社３年目の私が３年前の新卒の私に言いたい５つの事柄</p>
                        <div className={styles.articleTagu}>
                            <p>初心者,</p>
                            <p>ポエム,</p>
                            <p>初心者向け,</p>
                            <p>新人プログラマ応援</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@inoue2002が<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>QRコードリーダーLINEBotを作る【nodejs】</p>
                        <div className={styles.articleTagu}>
                            <p>Node.js,</p>
                            <p>QRcode,</p>
                            <p>linebot,</p>
                            <p>jimp</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@munaita_が<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>Python3.9 でのdatetimeの扱いのチートシート的メモ書き</p>
                        <div className={styles.articleTagu}>
                            <p>Python</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@ucan-labが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>Laravelの構成概念 第3回 サービスプロバイダ編</p>
                        <div className={styles.articleTagu}>
                            <p>PHP,</p>
                            <p>Laravel,</p>
                            <p>PHP8,</p>
                            <p>laravel8</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@ucan-labが<span className={styles.articleColor}>2021年04月25日に投稿</span></p>
                        <p className={styles.articleMain}>Git ローカルのmainブランチを使わない運用</p>
                        <div className={styles.articleTagu}>
                            <p>Git,</p>
                            <p>GitHub,</p>
                            <p>新人プログラマ応援</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@maika_kamadaが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>Reactで作ったWebアプリにVueで作ったWebアプリを合体させたい</p>
                        <div className={styles.articleTagu}>
                            <p>初心者,</p>
                            <p>iframe,</p>
                            <p>React,</p>
                            <p>vue-cil,</p>
                            <p>React-iframe</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@kyosuke_hashimotoが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>Amazon SageMakerで実現する機械学習モデルの説明可能性可視化とバイアス監視</p>
                        <div className={styles.articleTagu}>
                            <p>AWS,</p>
                            <p>機械学習,</p>
                            <p>監視,</p>
                            <p>SageMaker,</p>
                            <p>MLOps</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@nannany_が<span className={styles.articleColor}>2021年04月25日に投稿</span></p>
                        <p className={styles.articleMain}>MacBook Pro (M1チップ)の環境を整える</p>
                        <div className={styles.articleTagu}>
                            <p>Mac,</p>
                            <p>環境構築,</p>
                            <p>M1,</p>
                            <p>displylink</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@NP_Systemsが<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>GPT-3の概要と使い方のコツ</p>
                        <div className={styles.articleTagu}>
                            <p>Python,</p>
                            <p>自然言語処理,</p>
                            <p>AI,</p>
                            <p>gpt-3</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@uesynが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>Kubernetes 1.21: 変更点まとめ(What's new!)</p>
                        <div className={styles.articleTagu}>
                            <p>Kubernetes</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@takuya_tsurumiが<span className={styles.articleColor}>2021年04月26日に投稿</span></p>
                        <p className={styles.articleMain}>AWSソリューションアーキテクトアソシエイト受験記</p>
                        <div className={styles.articleTagu}>
                            <p>AWS,</p>
                            <p>ソリューションアーキテクト,</p>
                            <p>AWS認定試験</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@ryoya1122が<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>AWS×オンプレ1</p>
                        <div className={styles.articleTagu}>
                            <p>AWS,</p>
                            <p>オンプレミス</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@nekono_nekomoriが<span className={styles.articleColor}>2021年04月25日に投稿</span></p>
                        <p className={styles.articleMain}>超解像手法/DeepSRを参考にした実装</p>
                        <div className={styles.articleTagu}>
                            <p>Python,</p>
                            <p>DeepLearning,</p>
                            <p>Karas,</p>
                            <p>TensorFlow,</p>
                            <p>SuperResolution</p>
                            </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@Momomomo77777が<span className={styles.articleColor}>2021年04月26日に投稿</span></p>
                        <p className={styles.articleMain}>プロジェクト・勉強を期限までに終わらせたい！</p>
                        <div className={styles.articleTagu}>
                            <p>スケジュール管理,</p>
                            <p>工程管理</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@loic-meister-guildが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>SwiftUI 2.0: iOSアプリにファイルをインポートする方法</p>
                        <div className={styles.articleTagu}>
                            <p>SwiftUI,</p>
                            <p>iOS14,</p>
                            <p>fileimporter</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@ysakashitaが<span className={styles.articleColor}>2021年04月27日に投稿</span></p>
                        <p className={styles.articleMain}>Kubernetes 1.21: SIG Storageの変更内容</p>
                        <div className={styles.articleTagu}>
                            <p>kubernetes,</p>
                            <p>Storage</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@nem_takanobuが<span className={styles.articleColor}>2021年04月28日に投稿</span></p>
                        <p className={styles.articleMain}>PythonでSymbolブロックチェーンの送金プログラムを書いてみる。</p>
                        <div className={styles.articleTagu}>
                            <p>Python,</p>
                            <p>Blockchain,</p>
                            <p>Symbol,NEM</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@Kanahiroが<span className={styles.articleColor}>2021年04月26日に投稿</span></p>
                        <p className={styles.articleMain}>Cesiumと国土地理院標高タイルで3D地図をつくろう</p>
                        <div className={styles.articleTagu}>
                            <p>JavaScript,</p>
                            <p>GIS,</p>
                            <p>foss4g,</p>
                            <p>Cesium,</p>
                            <p>国土地理院</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@s_yarmaが<span className={styles.articleColor}>2021年04月26日に投稿</span></p>
                        <p className={styles.articleMain}>入社から1ヶ月で Claris FileMaker オンライン学習 初級編を観た話</p>
                        <div className={styles.articleTagu}>
                            <p>FileMaker</p>
                        </div>
                    </div>
                    <div className={styles.articleWaku}>
                        <p>@warai_otocoが<span className={styles.articleColor}>2021年04月26日に投稿</span></p>
                        <p className={styles.articleMain}>ラマヌジャンの公式で円周率を計算してみる</p>
                        <div className={styles.articleTagu}>
                            <p>Python,</p>
                            <p>円周率,</p>
                            <p>ラマヌジャン</p>
                        </div>
                    </div>
                </div>
                <div className={styles.adv}>
                    <p>{count}</p>
                    {/* <img className={styles.advImg} src={advImg1} alt="qiita-adv" /> */}
                    <div className={styles.event}>
                        <p className={styles.eventMargin}>開催中イベント</p>
                        {/* <img className={styles.advImg} src={advImg2} alt="qiita-adv2" /> */}
                        <p className={styles.eveTit}>Java開発者のためのAzure入門</p>
                        <p className={styles.eventFont}>締切：2021/05/09</p>
                    </div>
                    <div className={styles.adEve}>
                        <p className={styles.adTit}>フロントエンド強化月間を開始します</p>
                        <p className={styles.adArt}>5/31まで、記事投稿イベントとして、「フロントエンド強化月間」を開催しています</p>
                        <p className={styles.adArt2}>自分が知っている、フロントエンドを開発する上で知っておくべき知見を共有しませんか？</p>
                        <div className={styles.adFlex}>
                            <p className={styles.yajirushi}>➡︎</p>
                            <p className={styles.adFont}>詳しく</p>
                        </div>
                    </div>
                    <div className={styles.reco}>
                        <p className={styles.recoTit}>Qiita Zineおすすめ記事</p>
                        <div className={styles.recoArt}>
                            <p className={styles.recoCont}>コード自体がドキュメンテーション。試作モデルで顧客のサービス開発を高速実現する「DAAE」とは何か</p>
                            <p className={styles.recoTime}>2021/03/31インタビュー, タイアップ</p>
                        </div>
                        <div className={styles.recoArt}>
                            <p className={styles.recoCont}>リスクテイクしてこそ研究者だ。音響と画像認識で成果を出し続ける日立研究員のマインド</p>
                            <p className={styles.recoTime}>2021/03/12インタビュー, タイアップ</p>
                        </div>
                        <div className={styles.recoArt}>
                            <p className={styles.recoCont}>【Qiita x Udemy】エンジニアの新たな学びを応援！プレゼントキャンペーン結果発表！</p>
                            <p className={styles.recoTime}>2021/02/19イベント, タイアップ</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main