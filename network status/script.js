//selecting all required elements

const wrapper=document.querySelector(".wrapper"),
toast=wrapper.querySelector(".toast"),
wifiIcon=wrapper.querySelector(".icon"),
title=wrapper.querySelector("span"),
subTitle=wrapper.querySelector("p");
closeIcon=wrapper.querySelector(".close-icon");

window.onload=()=>{ // once window loaded
    function ajax(){
        let xhr=new XMLHttpRequest(); //creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts",true); //sending get request to this url
        xhr.onload = ()=>{ //once ajax loaded
            //if ajax status is equal to 200 or less than 300 that mean user is getting data/response from that provided URL
            // or user is online so he/she is getting response or 200 status code
            if(xhr.status==200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText="You're online now";
                subTitle.innerText="Hurray! Internet is connected.";
                wifiIcon.innerHTML='<i class="uil uil-wifi"></i>';

                closeIcon.onclick = ()=>{
                    wrapper.classList.add("hide");
                }

                setTimeout(()=>{
                    wrapper.classList.add("hide");

                },5000);//after 5 sec toast will be hidden automatically

                

            }else{ // user isn't online or may getting something other error
                offline();//calling offline function on both conditions
                

            }

        }
        xhr.onerror = ()=>{ // if the passed URL is incorrect or returning 404 or other error
            offline();//calling offline function on both conditions
         
            
        }
        xhr.send();
    }
    function offline(){//creating offline function
        wrapper.classList.remove("hide");//if user goes offline the show the toast will be show again
        toast.classList.add("offline");
        title.innerText="You're offline now";
        subTitle.innerText="Opps! Internet is disconnected!";
        wifiIcon.innerHTML='<i class="uil uil-wifi-slash"></i>';

    }
    //let put this ajax call inside setInterval function so we can call it after every 100ms
    //so we don't need to refresh the page to see the update status
    setInterval(()=>{
        ajax(); //calling ajax function
    },100); //100ms
}