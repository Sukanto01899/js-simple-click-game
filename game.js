const countBox = document.getElementById('status');
const startBtn = document.getElementById('startBtn');
const clickBtn = document.getElementById('clickBtn');
const result = document.getElementById('result')
let counter = 0;
let win = 10;

startBtn.addEventListener('click', ()=>{
    start()
})

clickBtn.addEventListener('click', ()=>{
    counter++;
    countBox.textContent = counter;
})

function start(){
    counter = 0
    countBox.textContent = counter;

    clickBtn.removeAttribute('disabled')
    result.textContent = ''
    startCount()
}

function startCount(){
   setTimeout(()=>{
    if(isWin()){
        result.textContent = 'You Win'
    }else{
        result.textContent = 'Not win'
    }
    clickBtn.setAttribute('disabled', true)
   
   }, 5000)

    
}

function isWin(){
    if(counter < win){
        return false
    }else{
        return true
    }
}