var json = JSON.parse(context.getVariable("request.content"));
var attr =[];
attr = json.attributes ;
var attname = context.getVariable("QueryString.name");
var attvalue = context.getVariable("QueryString.value");
attr.push({"name":attname,"value":attvalue});
json[json.attributes] = attr ;
json.name=json.name+'_'+attvalue;
context.setVariable("Payload",JSON.stringify(json));