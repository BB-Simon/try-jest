const stringLength = str => {
  if(str.length < 1){
    return 'string must be at least 1 character long'
  } else if(str.length > 10) {
    return 'string can\'t be more than 10 character long'
  } else {
    return str.length;
  }
}

module.exports = stringLength