var brandSourceValueKVM=context.getVariable("QueryString.brandSourceValue");
var brandSourceValueJSON=JSON.parse(brandSourceValueKVM);

var brandName=(context.getVariable("brandName"))
if(brandName === undefined)
throw error;

var brandSourceValue=brandSourceValueJSON[brandName.toLowerCase()];
if (brandSourceValue === undefined)
throw error;
context.setVariable("QueryString.value",brandSourceValue);

