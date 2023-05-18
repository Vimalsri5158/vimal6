async function bar(){
    let res=await fetch("https://xeno-canto.org/api/2/recordings?query=cnt:brazil");
    let data=await res.json();
    await user(data.recordings)
    
}
bar()

async function user(data){
console.log(data)

let html='';
data.forEach(user => {
    let htmlSegment=`
                        <h2>${user.id}</h2>
                    </div>`;
    html +=htmlSegment;

});
let container=document.querySelector('.container');
container.innerHTML=html;
}







