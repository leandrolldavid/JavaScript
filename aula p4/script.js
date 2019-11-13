function op(){

    var tab = document.getElementById('tab')
   tab.innerHTML=''

        let sel = document.createElement(`select`)
        sel.setAttribute("size", "11")
       
        for(var c=1 ;c < 3; c++){

            var item = document.createElement('option')
            item.text =`valor ${c}`
           
            sel.add(item)
        }
        
       
        tab.appendChild(sel)

    }