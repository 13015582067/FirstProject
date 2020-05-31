function requestMethod(par1,par2,par3) {
var xhr = new XMLHttpRequest();
//第二步：（找到哪个服务器去要数据）
xhr.open(par1,"https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/"+par2);
//设置头信息，告诉服务器让数据以表单的形式传递过去
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
//第三步：向服务器端发送请求
var par = "username="+userName + "&pwd=" + pwd;
xhr.send(par3);
//第四步：接受服务端返回的数据
xhr.onreadystatechange =function () {
    if(xhr.readyState == 4 && xhr.status==200){
        var responseData =JSON.parse(xhr.responseText);
        var str=responseData.data;
        if(str=="登录成功"){
            location.href="one.html"}
    }
    else{
        alert("responseData.data");
    }
}
}