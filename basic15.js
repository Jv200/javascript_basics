// else if

let age = 25;

if (age < 18) // false 
{
    console.log('junior');       // not executed
}
else if( age > 60)   // false
{
    console.log('senior');       // not executed
}
else
{
    console.log('middle');       //last
}