function main(str, str2) {
  let diffCount = 0
  for (let indexStr = 0, indexStr2 = 0; indexStr < str.length && indexStr2 < str2.length; indexStr++, indexStr2++) {
    if (str[indexStr] !== str2[indexStr2]) {
      diffCount++
    }
  }
  return diffCount
}

module.exports = { main };