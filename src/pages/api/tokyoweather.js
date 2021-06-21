import axios from "axios";

const tokyoWeather = async () =>{

    const config = {
        params: {
            q: 'Tokyo',
            cnt: '35',
            mode: 'null',
            lon: '138',
            type: 'link, accurate',
            lat: '0',
            units: 'imperial, metric'
        },
        headers: {
            'x-rapidapi-key': '96d2dc769amsh18a9ded4f8aa3abp1b67ffjsn541e476d4415',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    const res = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/find',
        config
    )

    console.log(res)
    return res

}

export default tokyoWeather