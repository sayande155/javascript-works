const form = document.querySelector("form");
// console.log(data);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Invalid Height";
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Invalid Weight";
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span><strong>${bmi}</span>`;
    }  
    
});