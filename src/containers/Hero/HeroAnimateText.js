let i = 0;

const randomizeText = () => {  
  const phrases = ['modern', 'elegant', 'amazing', 'elite', 'exciting', 'intelligent', 'fun', 'awesome', 'unique'];
  
  i = randomNum(i, phrases.length);
  const newPhrase = phrases[i];
  return newPhrase;
}

const randomNum = (num, max) => {
  let j = Math.floor(Math.random() * max);
  
  // ensure diff num every time
  if (num === j) {
    return randomNum(i, max);
  } else {
    return j;
  }
}

const getAnimationTime = () => {
  // const phrase = document.querySelector('.hero #adj');
  // const compStyles = window.getComputedStyle(phrase);
  // const animation = compStyles.getPropertyValue('animation');
  const compStyles = window.getComputedStyle(document.body);
  const animation = compStyles.getPropertyValue('--hero-text-animation');
  const animationTime = parseFloat(animation.match(/\d*[.]?\d+/)) * 1000;
  return animationTime;
}

export { randomizeText, getAnimationTime };