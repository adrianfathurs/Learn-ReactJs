import axios from 'axios'

// BaseURL is a third party from  jsonplaceholder which havent stable and running pure on jsonplaceholderserver
export const BaseURL="https://jsonplaceholder.typicode.com/"
// BaseURL_2 is a third party from  jsonplaceholder which havent stable and running using repository github server
export const BaseURL_2="https://my-json-server.typicode.com/adrianfathurs/Learn-ReactJs"
// BaseURL_3 is third party from jsonplaceholder which have stable connection and running on your device engine
export const BaseURL_3="http://localhost:3000/adrianfathurs/Learn-ReactJs"
export const httpClient = axios.create({
  baseURL: `${BaseURL_3}`,
  timeout: 12000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Content-Length":893812,
  },
  maxContentLength:100000000,
  
});

export const getAllData = params =>{
  return httpClient.get("/posts",params)
} 
export const getDetailData = params =>{
  return httpClient.get("/posts",{params})
} 