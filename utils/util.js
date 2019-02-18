const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const formatStar = count => {
  const num = Math.floor(count/10)
  return [1, 2, 3, 4, 5].map(item => item <= num ? 1 : 0)
}

module.exports = {
  formatTime: formatTime,
  formatStar: formatStar
}
