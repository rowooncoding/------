function getAttr(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

function setAttr(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(typeof prop !== 'string'){
    throw new Error ('이 함수의 두번째 인자는 문자 타입이어야 합니다');
  }
  if(prop.includes('data')){
    let rest = prop.slice(5);
    node.dataset[reset] = value;
  }
  if(!value){
    throw new Error ('이 함수의 마지막 인자는 필수값입니다');
  }
  node.setAttribute(prop,value);
}

function attr(node,prop,value){
  return !value ? getAttr(node,prop):setAttr(node,prop,value);
}