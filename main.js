let input=document.querySelector('#dis')

let btns=document.querySelectorAll('.btns')


btns.forEach((e)=>{
  e.addEventListener('click',(e)=>{
   
    input.value+=e.target.innerHTML
  })
})
let equal=document.querySelector('.equal')

equal.addEventListener('click',()=>{
  if(input.value== '**'||input.value=='*/'||input.value==''||input.value=="+"){
    alert('Error')
}
else if(input.value==undefined){
  alert('Error')

}
else{
  input.value= eval(input.value)

}
})

let clr=document.querySelector('.clr')

clr.addEventListener('click',()=>{
  input.value= 0
 })



 let Boo=false

 setInterval(()=>{
      document.title=Boo? 'Made By Gopi' :'Smiple Calculator'
      Boo=!Boo
 },2000)
