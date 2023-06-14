import axios from 'axios'

const url: string = 'http://194.58.100.36/api/'
export default function useApi() {
  async function getCategories() {
    return axios.get(`${url}productCategories`)
  }
  async function getProducts(id: number) {
    return await axios.get(`${url}product?category_id=${id}`)
  }
  async function getProduct(id: number) {
    return await axios.get(`${url}product/21${id}`)
  }

  return { getCategories, getProducts, getProduct }
}
