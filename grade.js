


function studentGrade() {
    const prompt = require("prompt-sync")();
        var marks = prompt("Enter Student mark:");
    
      //out of mark range 
      if (marks < 0 || marks > 100) {
        console.log`Out of range`;
      } else if (marks >= 80) {
        console.log( `A`);
      } else if (marks <= 79 && marks >= 60) {
        console.log(`B`);
      } else if (marks <= 59 && marks >= 50) {
        console.log (`C`);
      } else if (marks <= 49 && marks >= 40) {
        console.log(`D`);
      } else 
        console.log(`E`);
}
    studentGrade(); 

