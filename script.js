var arr =[
    {dp:'https://images.unsplash.com/photo-1679679008383-6f778fe07828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',image:'https://images.unsplash.com/photo-1679855779469-62442bb7cd6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {dp:' https://images.unsplash.com/photo-1680035116082-c7cd5e96fdb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',image:' https://images.unsplash.com/photo-1679506391790-e76e47706bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'},
    {dp:' https://images.unsplash.com/photo-1680028136470-5a957bc07a5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',image:' https://images.unsplash.com/photo-1678366954137-773fe11cb761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
    {dp:' https://images.unsplash.com/photo-1680011075204-9c5aad77ba48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=447&q=80',image:' https://images.unsplash.com/photo-1678827843845-d9d6d5b80f53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {dp:' https://images.unsplash.com/photo-1679919996303-1824ae520235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',image:' https://images.unsplash.com/photo-1677279852939-71b97f0434fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {dp:' https://images.unsplash.com/photo-1679855779469-62442bb7cd6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',image:' https://images.unsplash.com/photo-1675791278892-2f892237cf7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
    {dp:' https://images.unsplash.com/photo-1679860284313-0ddefb3f6398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',image:' https://plus.unsplash.com/premium_photo-1677265741635-0f6e1e74581e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'},
]
 
var clutter = "";

arr.forEach(function(elem,idx){
    clutter+= `<div class="story">
    <img id ="${idx}" src="${elem.dp}" alt="">
</div>`
});



document.querySelector("#ring").innerHTML = clutter;

console.log(clutter);

var grow = 0;
document.querySelector("#ring").addEventListener("click",function(dets){

     
     console.log(arr[dets.target.id]);
     document.querySelector("#fullscreen").style.display = "initial";
     document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].image})`;
     
     setTimeout(function(){
     document.querySelector("#fullscreen").style.display = "none";


     },3000)


     if(grow<=100){
     setInterval(function(){

        document.querySelector("#growth").style.width = `${grow++}%`
     },30)
    }

else{
    grow = 0; 
}

})