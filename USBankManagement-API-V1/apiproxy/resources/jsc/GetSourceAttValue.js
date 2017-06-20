var brandSourceValueKVM=context.getVariable("QueryString.brandSourceValue");
var brandSourceValueJSON=JSON.parse(brandSourceValueKVM);
var brandName=(context.getVariable("brandName")).toLowerCase();
var brandSourceValue=brandSourceValueJSON[brandName];
if(brandSourceValue === undefined)
throw error;
context.setVariable("QueryString.value",brandSourceValue);
