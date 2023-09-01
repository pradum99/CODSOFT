const buttons = document.querySelector('.buttons');
const btn = document.querySelectorAll('span');
const value = document.getElementById('value');
const toggleBtn = document.querySelector('.toggleBtn');
const body = document.querySelector('body');

for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener("click", function()
    {
        if(this.innerHTML=="=")
        {
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML=="Clear"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}
toggleBtn.onclick = function(){
    body.classList.toggle('dark');
}
