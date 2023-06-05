import {plus} from "./plus.js";
import './style.css';
import rabbit from './images/rabbit.png'

// console.log(plus((2,4));

// dom 파싱이 끝난 직후
document.addEventListener('DOMContentLoaded',()=>{
    document.body.innerHTML = `<img src="${rabbit}"/>`;
})