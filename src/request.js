export const APIURL = 'https://strapi-tungtung.herokuapp.com'
const axios = require('axios')
export const getDocuments = () => axios.get(`${APIURL}/document`)
export const addDocument = data => axios.post(`${APIURL}/questions/countbystr`, data)
export const editDocument = data => axios.put(`${APIURL}/document/${data.id}`, data)
export const deleteDocument = id => axios.delete(`${APIURL}/document/${id}`)
export const generateDocument = id => axios.get(`${APIURL}/document/generate/${id}`)
