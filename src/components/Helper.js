import axios from 'axios';

const genLink = (p) => {
  let link;
  for (let key of Object.keys(p)) {
    if (p[key] !== '') {

      if (key === 'minBed') link += `&beds[gte]=${+p[key]}`
      if (key === 'maxBed') link += `&beds[lte]=${+p[key] }`

      if (key === 'minPrice') link += `&price[gte]=${+p[key]}`
      if (key === 'maxPrice') link += `&price[lte]=${+p[key]}`

      if (key !== 'maxBed' && key !== 'minBed' && key !== 'minPrice' && key !== 'maxPrice') {
        link += `&${key}=${p[key]}`
      }
    }
  }
  return link;
}

const getItems = async (str) => {
  try {
    const data = await axios({
      method: 'GET',
      url: str,
    })
    if (!data.status === 200) return;
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

const postItems = async (str,dataObj) => {
  try {
    const data = await axios({
      method: 'POST',
      url: str,
      data : dataObj
    })

    if (!data.status === 201) throw new Error(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export {
  getItems,
  genLink,
  postItems
}