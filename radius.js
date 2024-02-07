"use strict";

const block = document.querySelector('.block');
const out = document.querySelector('.out');
const allCorners = document.querySelector('.all-corners');
const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomRight = document.querySelector('.bottom-right');
const bottomLeft = document.querySelector('.bottom-left');
const bWidth = document.querySelector('.b-width')
const bColor = document.querySelector('.b-color')
const bStyle = document.querySelector('.b-style')


out.innerHTML = 'border-radius: 10px 10px 10px 10px ;'; 

allCorners.oninput = function(){
  block.style.borderRadius = `${allCorners.value}px`;
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
  topLeft.value = allCorners.value
  topRight.value = allCorners.value
  bottomRight.value = allCorners.value
  bottomLeft.value = allCorners.value
}

topLeft.oninput = function(){
  block.style.borderTopLeftRadius = `${topLeft.value}px`;
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}

topRight.oninput = function(){
  block.style.borderTopRightRadius = `${topRight.value}px`;
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}
bottomRight.oninput = function(){
  block.style.borderBottomRightRadius = `${bottomRight.value}px`;
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}
bottomLeft.oninput = function(){
  block.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}

bWidth.oninput = function(){
  block.style.borderWidth = `${bWidth.value}px`
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}

bColor.oninput = function(){
  block.style.borderColor = bColor.value
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}

bStyle.oninput = function(){
  block.style.borderStyle = bStyle.value
  if(bWidth.value != 0){
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px; <br><br>
    border: ${bWidth.value}px  ${bStyle.value}  ${bColor.value};`;
  }else{
    out.innerHTML = `border-raius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
  }
}