let btn = document.getElementById('headitem-5');
let btn1 = document.getElementById('sidebaricon');
let sidebar = document.getElementById('sidebar');

btn.addEventListener
("click", 
()=>{ 
      
        sidebar.style.right = "0px"
   
    } );
    btn1.addEventListener
("click", 
()=>{ 
       
        sidebar.style.right = "-300px"
        
     });