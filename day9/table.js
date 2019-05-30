function()
{
    var i,num,

    num=number(document.getElementById("enter").value);
    

    for(i=1;i<=10;i++)
    {
        var ans=document.getElementById("answer")
        ans.innerHTML +=(num+i)+"<br>"
    }
}