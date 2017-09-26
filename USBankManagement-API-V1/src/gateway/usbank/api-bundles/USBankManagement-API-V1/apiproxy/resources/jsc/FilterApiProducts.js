var json = JSON.parse(context.getVariable("response.content"));
var attname = context.getVariable("QueryString.name");
var attvalue = context.getVariable("QueryString.value");
var arr = [];
if(json.app.length !== null)
{
if(json.app.length>0)
{
for (var i = 0;i<json.app.length;i++)
{
 
 var result = json.app[i];
 var data2 = json.app[i].attributes;
 var attrObj = data2.find(function(item,i)  

 {
     
 	if(item.name == attname && item.value == attvalue)
 	{
 	    
 	 arr.push(result);
 	 
 	}
 
  }
   
  );
}
}
}
var response ={"app" :  arr};
context.setVariable("apiNames",JSON.stringify(response));

