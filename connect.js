/*user chart */
let usercharts = new XMLHttpRequest()   
usercharts.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var User_Obj = JSON.parse(this.response);
        $("#user_number").text(User_Obj.users);
        $("#user_growth").text(User_Obj.growth);
    }
}
usercharts.open("GET" , "https://inlupp-fa.azurewebsites.net/api/total-users", true);
usercharts.send();

/*Project chart */
let Projectcharts = new XMLHttpRequest()   
Projectcharts.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var project_obj = JSON.parse(this.response);
        $("#project_number").text(project_obj.projects);
        $("#project_growth").text(project_obj.growth);
    }
}
Projectcharts.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-projects", true);
Projectcharts.send();


/*Downloads chart */
let Downloadschart = new XMLHttpRequest()   
Downloadschart.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var download_obj = JSON.parse(this.response);
        console.log(download_obj)
        $("#offline_value").text(download_obj[0].offlineAmount);
        $("#online_value").text(download_obj[1].onlineAmount);
    }
}
Downloadschart.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/downloads", true);
Downloadschart.send();


/*Totalsales chart */
let Totalsales = new XMLHttpRequest()   
Totalsales.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Totalsales = JSON.parse(this.response);
        $("#Revenue_value").text(Totalsales.revenue);
        $("#Returns_value").text(Totalsales.returns);
        $("#Queries_value").text(Totalsales.queries);
        $("#Invoices_id").text(Totalsales.invoices);
    }
}
Totalsales.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-sales-chart", true);
Totalsales.send();

/*Total_Growth_ chart */
let Total_Growth = new XMLHttpRequest()   
Total_Growth.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Total_Growth = JSON.parse(this.response);
        $("#Total_Growth_value").text(Total_Growth.currency+" "+Total_Growth.amount);
       
    }
}
Total_Growth.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-growth", true);
Total_Growth.send();

/*Totalsales_value chart */
let Totalsales_value = new XMLHttpRequest()   
Totalsales_value.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Totalsales_value = JSON.parse(this.response);
        $("#Totalsales_value").text(Totalsales_value.currency+" "+Totalsales_value.amount);
       
    }
}
Totalsales_value.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-sales", true);
Totalsales_value.send();


/*Total_Purchases_value chart */
let Total_Purchases_value = new XMLHttpRequest()   
Total_Purchases_value.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Total_Purchases_value = JSON.parse(this.response);
        $("#Total_Purchases_value").text(Total_Purchases_value.currency+" "+Total_Purchases_value.amount);
       
    }
}
Total_Purchases_value.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-purchases", true);
Total_Purchases_value.send();


/*Total_Orders_value chart */
let Total_Orders_value = new XMLHttpRequest()   
Total_Orders_value.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Total_Orders_value = JSON.parse(this.response);
        $("#Total_Orders_value").text(Total_Orders_value.currency+" "+Total_Orders_value.amount);
       
    }
}
Total_Orders_value.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/total-orders", true);
Total_Orders_value.send();



/*User chart */
let User = new XMLHttpRequest()   
User.onload = function(){ 
    if(this.readyState == 4 && this.status == 200){
        
        var User = this.response;
        $("#user_name").text(User);
        $("#user_name_welcome").text("Hi"+" "+User+" "+"Welcomeback!");

        
        
    }
}
User.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/users?firstname=Ahmad&lastname=Najjar", true);
User.send();




/*Notifications */
let Notifications = new XMLHttpRequest()   
Notifications.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Notifications = JSON.parse(this.response);
        $("#n1").text(Notifications[0].title);
        $("#n11").text(Notifications[0].subtitle);
        $("#n2").text(Notifications[1].title);
        $("#n22").text(Notifications[1].subtitle);
        $("#n3").text(Notifications[2].title);
        $("#n33").text(Notifications[2].subtitle);
        

    }
}
Notifications.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/notifications", true);
Notifications.send();






/*Messages */
let Messages = new XMLHttpRequest()   
Messages.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        var Messages = JSON.parse(this.response);
        $("#m1").text(Messages[0].from);
        $("#m11").text(Messages[0].title);
        $("#m2").text(Messages[1].from);
        $("#m22").text(Messages[1].title);
        $("#m3").text(Messages[2].from);
        $("#m33").text(Messages[2].title);
        
       
    }
}
Messages.open("GET" ,"https://inlupp-fa.azurewebsites.net/api/messages", true);
Messages.send();








