#! /usr/bin/env node

import inquirer from "inquirer"
let myHobbies= [];
let condition=true;
while(condition){
    let Hobbies = await inquirer.prompt([
        {
            name:"choose",
            message:"Are your hobbies one of them?(optional)",
            type:"list",
            choices:[
                "cricket", 
                "reading novels", 
                "riding", 
                "watching animes/movies",
                "traveling",
                "no"]
        },
        {
            name:"Passions",
            message:"Please Enter Your Hobbies",
            type:"input"

        },
        {
            name:"Reason",
            message:"Why Do You Like THis Hobbie",
            type:"input"
        },
        
        {
            name:"Attachmore",
            message:"Do You Have Only One Hobbies, Or You Wanna Attach more?(optional)",
            type:"confirm",
            default:false
        },
        
    ]);
    let choose =Hobbies.choose
    if (choose === "no"){
        choose = "not specified"
    }


    myHobbies.push({
        name: Hobbies.Passions,
        reason:Hobbies.Reason,
        hobby:Hobbies.choose,

    })
        condition = Hobbies.Attachmore;
    

if(!condition){
    console.log("Completed!");
    }
}
console.log("Final Hobbies:" , myHobbies);