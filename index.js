$(function() {
  const WORDS = ['Cunt', 'poop', 'BITCH!', 'butthole', '!!', 'FUCK']
  const COLORS = ['red', 'cyan', '#ffdd00', 'orange', '#e5a5ff', 'HotPink', '#468ce2', 'pink']

  const randomWord = words => words[Math.floor(Math.random()*words.length)]
  const randomColor = colors => colors[Math.floor(Math.random()*colors.length)]

  const generate_n_words = (n) => {
    const words = []
    for (let i = 0; i < n; i++) {
      words.push(randomWord(WORDS))
    }
    return words
  }


  generate_n_words(1000)
    .map(word => {
      const newSpan = document.createElement("span");
      newSpan.setAttribute('class', randomColor(COLORS));
      newSpan.innerHTML = word + ' ';
      // const newContent = document.createTextNode(word + ' ');
      // newSpan.className = 'red'
      return newSpan
    })
    .forEach(span => {
      document.body.appendChild(span)
    })

  const changeColor = () => {
    $('span').each(function() {
      $(this).css('color', randomColor(COLORS))
    })
  }

  setInterval(changeColor, 1000);
})
