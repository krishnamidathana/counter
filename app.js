const h1= document.querySelector('h1')
const btns = document.querySelectorAll('.btn')
let count =0;
h1.innerHTML =`0`

btns.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
const styles = e.target.classList
h1.innerHTML =`0`
 if(styles.contains('increment')){
    count++;
    h1.innerHTML =`${count}`
 }
 else if(styles.contains('decrement')){
    count--;
    h1.innerHTML =`${count}`
 }

 else{
    count=0
    
 }

 if(count>0){
    h1.style.color ='green';
 }
 if(count==0){
    h1.style.color ='grey';
 }
 if(count<0){
    h1.style.color ='red';
 }
 })
})