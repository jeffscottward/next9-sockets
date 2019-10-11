import { get } from "axios";
async function getData(url,params) {
  let data = {}
  if(params !== undefined){
    data = await get(url, params);
  } else {
    data = await get(url);
  }
  return data.data
}

export default getData;