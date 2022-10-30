
let list = document.getElementById('list').classList;
const opeen = document.getElementById('open');
const cloose =document.getElementById('close');
opeen.addEventListener('click',function(){

    list.add("show-nav")

})

cloose.addEventListener('click',function(){
    list.remove('show-nav')
})



























