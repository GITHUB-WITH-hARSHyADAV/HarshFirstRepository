let btn = document.getElementById('headitem-5');
let btn1 = document.getElementById('sidebaricon');
let sidebar = document.getElementById('sidebar');
var bool=true;
btn.addEventListener
("click", 
()=>{ 
        sidebar.style.visibility = "visible"
   
    } );
    btn1.addEventListener
("click", 
()=>{ 
        sidebar.style.visibility = "hidden"
        
     });