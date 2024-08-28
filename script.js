const info = document.querySelector('form')
// console.log(info);
info.addEventListener('submit', function (listen) {
    listen.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if (height === '' || isNaN(height) || height<0) {
        results.innerHTML = `Result :- Please give a valid height ${height}`;
    } else if(weight === '' || isNaN(weight) || weight<0) {
        results.innerHTML = `Result :- Please give a valid height ${weight}`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>Result :- ${bmi}</span>`;
    }
})
