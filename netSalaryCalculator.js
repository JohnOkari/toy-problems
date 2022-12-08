function netSalaryCalculator(gross,benefits){
    // net income 
        let netSalary = (gross + benefits) - (totalDeductions);
        let nhif;
        let nssf = 200;
        let payee;
        let totalDeductions = (nhif + payee + nssf);
  
  //calculating employee nhif
        if (taxablePay > 23999){
            return taxablePay;
        }else{
            if(taxablePay > 99999){
                nhif = 1700;
            }else if (taxablePay > 89999){
                nhif = 1600;
            }else if (taxablePay > 79999){
                nhif = 1500;
            }else if (taxablePay > 69999){
                nhif = 1400;
            }else if (taxablePay > 59999){
                nhif = 1300;
            }else if (taxablePay > 49999){
                nhif = 1200;
            }else if (taxablePay > 44999){
                nhif = 1100;
            }else if (taxablePay > 34999){
                nhif = 1000;
            }else if (taxablePay > 29999){
                nhif = 900;
            }else if (taxablePay > 24999){
                nhif = 850;
            }else if (taxablePay > 19999){
                nhif = 750;
            }else if (taxablePay > 14999){
                nhif = 600;
            }else if (taxablePay > 11999){
                nhif = 500;
            }else if (taxablePay > 7999){
                nhif = 400;
            }else if (taxablePay > 5999){
                nhif = 300;
            }else{
                nhif = 150
            }
  //calaculating payee
  
        if (taxablePay>32333){
            payee = 240000 * 0.1 + 8333 * 0.25 + (taxablePay - 32333) * 0.3;
        }else if (taxablePay >= 24000){
            payee = 24000 * 0.1 + (taxablePay - 24000) * 0.25;
        }else if (taxablePay > 23999){
            payee = 24000 * 0.1 ;
        }
  // returning the netsalary
  
        return netSalary
    }
  
  }
  
  // console.log(netSalaryCalculator())