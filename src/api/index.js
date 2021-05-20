import ajax from './ajax'
const BASE_URL='/apx'
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)