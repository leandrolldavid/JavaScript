let img = document.getElementById('img')
let btn = document.getElementById('btn')

let comparPizza = document.createElement('input')
comparPizza.setAttribute('value', 'Comprar pizza')
comparPizza.setAttribute('type', 'button')
comparPizza.setAttribute('onclick', `comprar()`)

let comerPizza = document.createElement('input')
comerPizza.setAttribute('value', 'comer')
comerPizza.setAttribute('type', 'button')

let pizza = document.createElement('img')

function comprar(){
    img.innerHTML=""
    btn.innerHTML=""
    // mudar imagem 8 pedaços 
    pizza.setAttribute('src','/img/8.jpg')
    img.appendChild(pizza)

    // colocar outro botão comar pizza
    comerPizza.setAttribute('onclick', 'comer(8)')
    
    btn.appendChild(comparPizza)
    btn.appendChild(comerPizza)
}
function comer(n){
    
       if(n >0){
            --n
            pizza.setAttribute('src',`/img/${n}.jpg`)
        
            comerPizza.setAttribute('onclick', `comer(${n})`)
            btn.innerHTML=""
            btn.appendChild(comparPizza)
            btn.appendChild(comerPizza)
            if(n==0){
                btn.innerHTML=""
                btn.appendChild(comparPizza)
                }
        }
       else  {           
            btn.innerHTML=""
            btn.appendChild(comparPizza)
            }
          return  n
}   