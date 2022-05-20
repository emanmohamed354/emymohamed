let btn =document.getElementsByClassName('button');
let checks =document.getElementsByClassName('v');
let ttdd =document.getElementById('n');
let sal =document.getElementById('ff');
let kal =document.getElementById('kl');
let yu =document.getElementById('y');



    let j=0;

function s()
{
    
    for(let i=0;i<63;i++)
    {
        if(checks[i].checked==true)
       { j++;};

    }
    if(j==0)
    {
        ttdd.innerHTML=`You have order nothing `;
    }
    else{
    ttdd.innerHTML=`you have order ${j}`;}
     ttdd.style.cssText=" text-align: center;height: 2em;width: 20%;"
      

}
function c()
{
sal.style.cssText="display:none";
kal.style.cssText="display:block";
if(j==0)
{
yu.innerHTML=`Order Next Time Please &#128151 ...`;

}
else
{
    yu.innerHTML=`Your Order Will Arrive Soon &#128151...`;
}}
function k()
{
    sal.style.cssText="display:block";
    kal.style.cssText="display:none";

}