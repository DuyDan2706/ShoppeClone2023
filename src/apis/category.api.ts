import http from 'src/utils/http'
import { Category } from 'src/types/category.type'
import { successReponse } from 'src/types/until.type'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get<successReponse<Category[]>>(URL)
  }
}

export default categoryApi
