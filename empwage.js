function empWage(companyName, fullWage, halfWage, noWage, workingDays) {       //functional constructor 'empWage'

    this.companyName = companyName;                   
    this.fullWage = fullWage;
    this.halfWage = halfWage;
    this.noWage = noWage;
    this.workingDays = workingDays;

    this.empWageBuilder = function() {                                         //function / method (logic)

        
        console.log('\n------------------------------------------------------------------------------------------------');
        console.log('-- Welcome to EmpWageBuilder program using above data --');
        console.log('------------------------------------------------------------------------------------------------');
        console.log('Day No' +'\t\t\t'+ 'Wage' +'\t\t\t'+ 'TotalWage\n');
        
        var sum = 0;

        for(var i = 0; i <= workingDays; i++) {

           var attendance = Math.floor((Math.random() * 3) + 1);
          
           switch(attendance) {

            case 1:
                sum = sum + noWage;
                console.log('Day ' + i +'\t\t\t'+ noWage +'\t\t\t'+ sum);
                break;
            
            case 2:
                sum = sum + halfWage;
                console.log('Day ' + i +'\t\t\t'+ halfWage +'\t\t\t'+ sum);
                break;
            
            case 3:
                sum = sum + fullWage;
                console.log('Day ' + i +'\t\t\t'+ fullWage +'\t\t\t'+ sum);
                break;
            
            default:
                console.log('No such case');
                break;

          }
        }
        console.log('\nTotal Employee Wage is : ' + sum + '$\n'+
                    '------------------------------------------------------------------------------------------------');
    }  
}

var flipkart = new empWage("Flipkart", 160, 80, 0, 28);         //making an object of functional constructor and passing data as arguments
console.table(flipkart);                                        //just printing the data itself
 
flipkart.empWageBuilder();                                      //calling the logic method or function within the functional constructor
                                                                //functional constructor can be also called as class.

                                                                