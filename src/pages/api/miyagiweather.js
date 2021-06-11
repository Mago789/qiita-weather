import axios from "axios";

const miyagiWeather = async () =>{

    const config = {
        params: {
            q: 'Fukuoka',
            cnt: '33',
            mode: 'null',
            lon: '129',
            type: 'link, accurate',
            lat: '0',
            units: 'imperial, metric'
        },
        headers: {
            'x-rapidapi-key': '96d2dc769amsh18a9ded4f8aa3abp1b67ffjsn541e476d4415',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    const res = await axios.get(
        'https://community-open-weather-map.p.rapidapi.com/find',
        config
    )

    console.log(res)
    return res
}

export default miyagiWeather