

function netSalaryCalculator(tax){
    
    let income = parseFloat($("income"). value);
    $("tax").value = calcPayee(income);
    console.log(tax);
    function calcPayee(ksh){
        let calculate = 0;
        if (ksh > 32000){
            tax = (ksh ) * 0.3
        }  else if (ksh <= 31999 && ksh >= 24000){
            tax = (ksh)* 0.25
        } else {
            tax = (ksh)*0.1
        }
        return tax;
    }  
}

// console.log(netSalaryCalculator())