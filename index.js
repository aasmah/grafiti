
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = "left";
header.style.backgroundColor  = "purple";
//document.getElementById("myDiv").style.borderColor ="red;"
document.body.style.backgroundColor= "yellow";
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++)
{
    dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform= "rotate(180deg)";
}

//dogImages[i].style.transform

footer.style.borderStyle = 'solid'