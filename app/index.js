setInterval(() => {
  var style = {
    color: '#' + (Math.random() * 0xffffff & 0xffffff).toString(16)
  }

  style = Object.keys(style).map((e, i) => {
    return e + ': ' + style[e] + ';'
  }).join('')

  document.querySelector('body').setAttribute('style', style)
}, 100)
