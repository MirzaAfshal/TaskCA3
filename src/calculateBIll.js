var data;
document.getElementById("BillForm").addEventListener("submit", (e)=>{  
    let formElemnts = new Array(...e.target.elements); 
    //GET all the values from view
    data =  (formElemnts.map( (e)=>{ 
    if (e.name){ 
        let inputValue = parseFloat(e.value.trim());
        return [e.name, inputValue ? parseFloat(e.value.trim()) : 0  ]} 
    })).filter( (e)=>{ 
        if(e){return e} 
    })

    document.getElementById("Section2").style.display="block"
    document.getElementById("Section1").style.display="none"
    console.log(data)
    let values =  data.map(values => {
    return values[1]
    })
    
    let units = values[0];
    let days = values[1];
    let centsPerUnit = 0.20;
    let centsPerDay = 0.04;
    let vat = 13.5 / 100
    //Calculate Bill without VAT
    let billWithOutVat = units * centsPerUnit + days * centsPerDay
    //Calculate Bill without VAT
    let billWithVat = billWithOutVat + (billWithOutVat * vat)
    console.log('check the result ->', billWithOutVat.toFixed(2), billWithVat.toFixed(2))
    document.getElementById("NOfUnits").innerText = units;
    document.getElementById("BillPerid").innerText= days;
    document.getElementById("WithoutVAT").innerText= units +"*" + centsPerUnit +"+"+ days +"*"+ centsPerDay +"="+ billWithOutVat.toFixed(2);
    document.getElementById("IncludingVAT").innerText= billWithOutVat +"+"+ (billWithOutVat +"*"+ vat)+ "=" +billWithVat.toFixed(2);
    e.preventDefault();
});
document.getElementById("backbtn").addEventListener("click",(e)=>{
    document.getElementById("Section2").style.display="none"
    document.getElementById("Section1").style.display="block"
})
