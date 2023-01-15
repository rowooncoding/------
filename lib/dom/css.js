function addClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    typeError('이 함수의 두번째 글자는 문자타입 이어야 합니다')
  }
  node.classList.add(className);
}

function removeClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(!className){
    node.className = ''
    return
  }
  if(typeof className !== 'string'){
    typeError('이 함수의 두번째 글자는 문자타입 이어야 합니다')
  }
  node.classList.remove(className);
}

function toogelClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    typeError('이 함수의 두번째 글자는 문자타입 이어야 합니다')
  }
  node.classList.toggle(className);
}

function getCsss(node,prop){
  if(typeof node === 'string') node = getNode(node);
  if(!(prop in document.body.style)){
    syntaxError('이 함수의 두번째 인자는 유효한 css 속성이어야 합니다')
  }
  return getComputedStyle(node)[prop];
}

function setCss(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value){
    syntaxError('setCSS 함수의 세 번째 인자는 필수값 입니다.')
  }
  
  // if(value.replace(/\s+/g,'') === ''){

  // }
  
  node.style[prop] = value;

}

const css = (node,prop,value)=>{
  return !value ? getCsss(node,prop) : setCss(node,prop,value);
}