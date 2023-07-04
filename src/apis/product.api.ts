
import { ProductListConfig,Product, ProductList } from "src/types/product.type"
import { successReponse } from "src/types/until.type"
import http from "src/utils/http"

const URL = 'products'

const productapi = {
  getProducts(params:ProductListConfig){
    return http.get<successReponse<ProductList>>(URL,{
      params
    })
  },
  getProductDetail(id:string){
    return http.get<successReponse<ProductList>>(`${URL}/${id}`)
  }
}

export default productapi