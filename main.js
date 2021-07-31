window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    console.log("object");
  });

  function toggleMenu() {
    const menutoggle = document.querySelector(".menutoggle");
    const navigation = document.querySelector(".navigation");
    menutoggle.classList.toggle('active') 
    navigation.classList.toggle('active')
  }
  document.getElementById("send-btn").addEventListener("click",function(){
    const n = document.getElementById("name");
    const e = document.getElementById("email");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("textarea");
    if(name=="" && email=="" ){
      n.placeholder="Enter name to send!";
      e.placeholder="Enter Valid mail id!";
      text.placeholder="This can't be left Empty!"
    }
    else{
      alert(name+"\nSend Msg?")
      n.value="";
      e.value=""
      n.placeholder="Name";
      e.placeholder="Email";
      text.placeholder="Enter Message to Send";
      text.value=""
    }
    
  })
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  