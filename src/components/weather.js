import hokkaidoWeather from "../pages/api/hokkaidoweather.js"
import miyagiWeather from "../pages/api/miyagiweather.js"
import tokyoWeather from "../pages/api/tokyoweather.js"
import hiroshimaWeather from "../pages/api/hiroshimaweather.js"
import fukuokaWeather from "../pages/api/fukuoksweather.js"
import styles from "../styles/components/weather.module.css"

const weather = () => {
    return(
        <div className={styles.wea}>
            <div className={styles.hokkaido}>
                <p>北海道の天気は</p>
                <p>{hokkaidoWeather}</p>
            </div>
            <div className={styles.miyagi}>
                <p>宮城の天気は</p>
                <p>{miyagiWeather}</p>
            </div>
            <div className={styles.tokyo}>
                <p>東京の天気は</p>
                <p>{tokyoWeather}</p>
            </div>
            <div className={styles.hiroshima}>
                <p>広島の天気は</p>
                <p>{hiroshimaWeather}</p>
            </div>
            <div className={styles.fukuoka}>
                <p>福岡の天気は</p>
                <p>{fukuokaWeather}</p>
            </div>
        </div>
    )
}


export default weather