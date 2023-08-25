// 个人信息
const INFO_KEY = 'shopping_info'
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}
export const setInfo = (Info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(Info))
}
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 搜索历史管理
const HISTORY_KEY = 'history_key'
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
