var ten = document.getElementById("name").innerHTML.value
var ngaysinh = document.getElementById("ngaysinh").value
var diachi = document.getElementById("diachi").value
var email = document.getElementById("email").value
var sdr = document.getElementById("sdt").value
var maxn = document.getElementById("maxn").value

var lst=document.getElementById("span");
var indx =0;
for(x of lst)
{
    x.style.display='none';
}

function kiemtr()
{
for(x of lst)
{
    x.style.display = 'none';
}
}