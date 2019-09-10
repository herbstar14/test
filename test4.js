var department = "cs"
//basically the point of this file is to show that
//you can have objects inside objects with functions
//insde those objects. be sure u remember where the "levels" are
//dont want to do something out of "scope" 
var obj = {
    name: "Andrew", //sometimes you need to use double quotes around things "name": "andrew" 
    job: "student", 
    school: "uww", //these3 commas are needed to keep things flowing 
    
    anotherobj:{
        firstname: "Andrew",
        lastname: "herbst",
        age: 21,
        id_num: "1948576",
    },//end of "anotherobj"
        

     etc: function(){
         var returnvalue = this.anotherobj.firstname + " " + this.anotherobj.lastname
         return returnvalue
      }//end inner function



    } //end obj

obj.anotherobj.lastname = "herbst"
obj.schoolnumber = 123456

//below is us calling different parts of this weird object we just made 
console.log(obj.name)
console.log(obj.etc())
console.log(obj.schoolnumber)




