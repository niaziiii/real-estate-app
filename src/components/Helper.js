import axios from 'axios';
const getItems= async(str)=>{
  try {
    const data =  await axios({
      method :'GET',
      url : str,
    })
    if(!data.status === 200) return;
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
}

export {
    getItems,
}