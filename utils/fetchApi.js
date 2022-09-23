/* headers: {
    'X-RapidAPI-Key': '19b35b286fmshf89d328be7d78f0p10c578jsndb27ef7ead9e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  } */

  import axios from "axios";

  export const baseUrl = 'https://bayut.p.rapidapi.com'

  export const fetchApi = async (url) => {
      const {data} = await axios.get((url), {
        
        headers: {
            'X-RapidAPI-Key': '19b35b286fmshf89d328be7d78f0p10c578jsndb27ef7ead9e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
      })
      return data;
  }