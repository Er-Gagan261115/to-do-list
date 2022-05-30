let a = document.getElementById("btn");
a.addEventListener("click",function (e) {
    let b = document.getElementById("input").value;
    let ul = document.getElementById("items_parent")

   let li = document.createElement("li");
   li.className = "items";

   let parag = document.createElement("p");
   parag.className = "para"
   parag.appendChild(document.createTextNode(b));
   li.appendChild(parag)

   let btn2 = document.createElement("button");
   btn2.className = "edit";
   btn2.type = "button";
   btn2.appendChild(document.createTextNode("Edit"))
   btn2.setAttribute("onclick","edit(this)")
   li.appendChild(btn2)

   let btn1 = document.createElement("button");
   btn1.className = "del";
   btn1.type = "button";
   btn1.appendChild(document.createTextNode("Del"))
   btn1.setAttribute("onclick","dele(this)")
   li.appendChild(btn1)

   ul.appendChild(li);

   document.getElementById("input").value = ""
})
function dele(e)
{
    e.parentElement.remove();
    console.log("deleted")
}

function edit(e){
    document.getElementById("btn").style.display = "none";
    document.getElementById("update_btn").style.display = "block";
    let content = e.previousElementSibling.textContent;
    document.getElementById("input").value = content;

    let update = document.getElementById("update_btn")
    update.onclick = function(){
    let newcont = document.getElementById("input").value;
    let new_para = document.createElement("p");
    new_para.className = "para"
    new_para.appendChild(document.createTextNode(newcont));
    e.parentElement.replaceChild(new_para,e.previousElementSibling);
    document.getElementById("input").value = "";
    document.getElementById("btn").style.display = "block";
    document.getElementById("update_btn").style.display = "none";
    }

}
