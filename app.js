const form = document.getElementById('myForm');
form.addEventListener('submit',e=>{
    e.preventDefault();
    
    let val = document.getElementById('search');
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${val.value}&appid=f01d973cbc33e04f3c27f7f86a28108b&units=metric`;
    let iconValue;
    console.log('hiiii url--?',url);
    console.log('val',val.value);
    const container =document.getElementById('tiles')
    fetch(url)
    .then(response=>response.json())
    .then(data=>
        {
            console.log(data);
            console.log(data.weather[0].icon);
            iconValue=data.weather[0].icon;
            const li=document.createElement('li');
            li.className='listClass' ;
           const markup=` 
           <div class="iconClass">
           <p>${data.sys.country.toUpperCase()}<p>
           <p>${data.name}</p>
           <p>Temp ${data.main.temp}</p>
           <img
           src="http://openweathermap.org/img/wn/${iconValue}@2x.png"   
         />
         <p> ${data.weather[0].main}</p>
         </div>
         `;
         li.innerHTML=markup;
         container.append(li);
        });
            
        })
