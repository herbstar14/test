

var letsgoo = ()=>{

    var rev = 25000
    var cogs =18500

    var profit = rev - cogs

    console.log("~~~~~~~~~~~~~~~~~~~~~~~~ \n"+"Revenue : " + rev + "\n" + "cogs : " + cogs + "\n" + "profit : " + profit )


}//end arrow function "=>"

letsgoo();


var again = (function(){

    var asset = 200000
    var liabilities = 100000
    var SE = 100000

    var LieSE = liabilities + SE

    console.log(" ~~~~~~~~~~~~~~~~~~~~~~~~ \n"+"Assets : " + asset + "\n"+
                "liabilities : " + liabilities + "\n"+
                "Stockholders E. : " + SE + "\n" + 
                "Equ : " + asset + " = " + liabilities + " + " + SE + "\n" + 
                "(Simplified) : " + asset + " = " + LieSE)

                if (asset == LieSE){
                    console.log("\n"+"You did it right yay!")
                }//end if
                else{console.log("\n" + "You did it wrong. Go back and try again!")}


}())//end instant run function
