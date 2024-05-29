function sub(){
    document.getElementById("alert").innerHTML="item added successfully!"
    document.getElementById("alert").style.backgroundColor="green"
    event.preventDefault();

    setTimeout(function() {
        document.getElementById("alert").innerHTML = "";  
    }, 3000);

    var myContent=document.getElementById("item").value;
    var newId=Date.now()
    localStorage.setItem(newId,myContent)

    var addhere = document.getElementById("grocery-list");
    let itemval=document.getElementById("item").value

     
    var p = document.createElement('p');
    p.classList.add('grocery-item');
    p.innerHTML = `<p class="title">${itemval}</p> <span><button type="button" class="delete-btn"><i class="fas fa-trash"></i></button><span>`
 
    var br = document.createElement('br');
   addhere.appendChild(p);
    addhere.appendChild(br); 

   
  
     var deleteBtn = p.querySelector('.delete-btn');
     deleteBtn.addEventListener('click', function () {
       
         var itemId = p.dataset.itemId;
         localStorage.removeItem(itemId);
         localStorage.removeItem(newId);
  
         p.remove();
      
        if(br){ 
         br.remove();
        }
     });

      
 
     
}
function clr(){
    localStorage.clear()
    document.getElementById("alert").innerHTML="list cleared!"
    document.getElementById("alert").style.backgroundColor="red"
    event.preventDefault();
    setTimeout(function() {
        document.getElementById("alert").innerHTML = "";  
    }, 3000);
    var groceryList = document.getElementById("grocery-list");
    var groceryItems = document.querySelectorAll('.grocery-item');
    
    
    groceryItems.forEach(function(item) {
        var deleteBtn = item.querySelector('.delete-btn');
        var br = item.nextElementSibling;
        deleteBtn.remove();  
        item.remove();
        if (br) {
            br.remove();  
        }
  
    
    });
  

}


//   display items from local storage when the page loads
window.onload = function() {
    var addhere = document.getElementById("grocery-list");
   
    for (var i = 0; i < localStorage.length; i++) {
        var itemId = localStorage.key(i);
        var itemValue = localStorage.getItem(itemId);
        if (itemId !== 'length') {  
            var p = document.createElement('p');
            p.classList.add('grocery-item');
            p.dataset.itemId = itemId;  
            p.innerHTML = `<p class="title">${itemValue}</p> <span><button type="button" class="delete-btn"><i class="fas fa-trash"></i></button><span>`;
            var br = document.createElement('br');
            addhere.appendChild(p);
            addhere.appendChild(br);
        
            var deleteBtn = p.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                
                var itemId = p.dataset.itemId;
                localStorage.removeItem(itemId);
         
                p.remove();
                br.remove();
            });
        }
    }
};

 