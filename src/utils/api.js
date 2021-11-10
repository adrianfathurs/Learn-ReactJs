import axios from 'axios'

export const BaseURL="https://jsonplaceholder.typicode.com"
export const httpClient = axios.create({
  baseURL: `${BaseURL}`,
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