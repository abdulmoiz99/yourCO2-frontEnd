import jwt_decode from 'jwt-decode'

export const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}
export const getStorage = (key) => {
  return localStorage.getItem(key)
}
export const clearStorage = () => {
  localStorage.clear()
}
export const rootPath = () => {
  return 'https://youco2api.azurewebsites.net/api'
}
export const IsAdmin = () => {
  var token = localStorage.getItem('token')
  var decoded = jwt_decode(token)
  console.log(decoded.roleId)
  if (decoded.roleId === '2') {
    return true
  } else {
    return false
  }
}
