//Switch
// its controls the flow of execution 
//its an alternative for else if and multiple if statements
//makes code clearer and more readable
switch(2)
{
    case 1:
        console.log(' not match');
        break;
    case 2:
        console.log('match');
        break;    

}
switch(2)
{
    case 1:
        console.log(' not match');
        break;
    case '2':        // its a string and switch checks by using ===
        console.log('match');
        break;    
    default :
        console.log("not found");
}

switch(10+5)
{
    case 20:
        console.log(' not match');
        break;
    case 15 :        
        console.log('match');
        break;    
    default :
        console.log("not found");
}
//Break statements are only used so that other cases which are below your correct case wont execute…since nothing is written below default there is no need to use break.
// You can use it but it wont matter because default is the last case to be executed.
// The control will automatically come out of the switch case after executing default whether you use break or not.
switch(2)
{
    case 1:
        console.log(' not match');
    case 2:        
        console.log('match');             
    default :
        console.log("not found");    //it also gets executed as no break statement was in case2
    
}
//Standard convention is to place the default as the last clause.
// But you can place it before other cases too.
//The computer will still go through each of the cases and find a match.
switch(10+5)
{
    case 20:
        console.log(' not match');
        break;
    case 13 :        
        console.log('ny match');
        break;    
    default :
        console.log("not found");   
        break;
    case 15:
        console.log('match');
        break;
}
// lets see placing default in between without break statements
switch(10+5)
{
    case 20:
        console.log(' not match');
    case 13 :        
        console.log('ny match');    
    default :                    // default k bad break ny tha thats why case16 bhi print hua 
        console.log("not found");   
    case 16:
        console.log('match');
}

//If break is omitted, execution will proceed to the next case clause, even to the default clause, regardless of whether the value of that clause's expression matches. 
//This behavior is called "fall-through".
