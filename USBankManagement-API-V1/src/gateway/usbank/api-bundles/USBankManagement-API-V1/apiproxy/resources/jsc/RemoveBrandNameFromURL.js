

var proxyPathSuffix=context.getVariable("proxy.pathsuffix");
var brandName=context.getVariable("brandName");

{
var pathsuffixNew=proxyPathSuffix;


if(proxyPathSuffix !== undefined && proxyPathSuffix !== "") {

    var pathsuffixNew=proxyPathSuffix.substring(brandName.length+1);
    
}

}

context.setVariable("pathsuffixNew", pathsuffixNew);
