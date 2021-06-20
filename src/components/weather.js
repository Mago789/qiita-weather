import { useState } from "react"
import fukuokaWeather from "../pages/api/fukuoksweather"
import hiroshimaWeather from "../pages/api/hiroshimaweather"
import hokkaidoWeather from "../pages/api/hokkaidoweather"
import miyagiWeather from "../pages/api/miyagiweather"
import aitiWeather from "../pages/api/aitiweather.js"
// import tokyoWeather from "../pages/api/tokyoweather"
import styles from "../styles/components/weather.module.css"

const Weather = () => {

    const [weather, setWeather] = useState({
        hokkaido: null,
        miyagi: null,
        aiti: null,
        hiroshima: null,
        fukuoka: null
    })

    console.log(weather)


    const onClickWeather = async () => {
        try {
            const hokkaido = await hokkaidoWeather()
            const miyagi = await miyagiWeather()
            // const tokyo = await tokyoWeather()
            const aiti = await aitiWeather()
            const hiroshima = await hiroshimaWeather()
            const fukuoka = await fukuokaWeather()

            setWeather({
                hokkaido: hokkaido.data,
                miyagi: miyagi.data,
                // tokyo: tokyo.data,
                aiti: aiti.data,
                hiroshima: hiroshima.data,
                fukuoka: fukuoka.data
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return(
        <div className={styles.wea}>
            <button onClick={() => onClickWeather()}>天気</button>
            <div className={styles.hokkaido}>
                {weather.hokkaido ? <p>北海道の天気は{weather.hokkaido.list[0].weather[0].main}</p> :null}
            </div>
            <div className={styles.miyagi}>
                {weather.miyagi ? <p>宮城の天気は{weather.miyagi.list[0].weather[0].main}</p> : null}
            </div>
            {/* <div className={styles.tokyo}>
                {weather.tokyo ? <p>東京の天気は{weather.tokyo.list[0].weather[0].main}</p> : null}
            </div> */}
            <div className={styles.aiti}>
                {weather.aiti ? <p>愛知の天気は{weather.aiti.list[0].weather[0].main}</p> : null}
            </div>
            <div className={styles.hiroshima}>
                {weather.hiroshima ? <p>広島の天気は{weather.hiroshima.list[0].weather[0].main}</p> : null}
            </div>
            <div className={styles.fukuoka}>
                {weather.fukuoka ? <p>福岡の天気は{weather.fukuoka.list[0].weather[0].main}</p> : null}
            </div>
        </div>
    )
}


export default Weather