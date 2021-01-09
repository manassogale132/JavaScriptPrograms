function empWage(companyName,fullWage,halfWage,noWage,workingDays){       //functional constructor 'empWage'

    this.companyName = companyName;                   
    this.fullWage = fullWage;
    this.halfWage = halfWage;
    this.noWage = noWage;
    this.workingDays = workingDays;

    this.empWageBuilder = function(){                                            //function / method (logic)

        console.log(' ');
        console.log('------------------------------------------------------------------------------------------------');
        console.log('-- Welcome to EmpWageBuilder program using above data --');
        console.log('------------------------------------------------------------------------------------------------');
        console.log('Day No' + '            ' + 'Wage' + '                 ' + 'TotalWage');
        console.log(' ');

        var sum = 0;

        for(var i = 0; i<=workingDays; i++){

           var attendance = Math.floor((Math.random() * 3) + 1);
          
           switch(attendance){

            case 1:
                sum = sum + noWage;
                console.log('Day ' + i + '               ' + noWage + '                    ' + sum);
                break;
            
            case 2:
                sum = sum + halfWage;
                console.log('Day ' + i + '               ' + halfWage + '                    ' + sum);
                break;
            
            case 3:
                sum = sum + fullWage;
                console.log('Day ' + i + '               ' + fullWage + '                    ' + sum);
                break;
            
            default:
                console.log('No such case');
                break;

          }
        }
        console.log(' ');
        console.log('Total Employee Wage is : ' + sum + '$');
        console.log(' ');
        console.log('------------------------------------------------------------------------------------------------');
    }
    
}

var flipkart = new empWage("Flipkart",160,80,0,28);             //making an object of functional constructor and passing data as arguments
console.log(' ');
console.table(flipkart);                                        //just printing the data itself
 
flipkart.empWageBuilder();                                      //calling the logic method or function within the functional constructor
                                                                //functional constructor can be also called as class.

                                                                