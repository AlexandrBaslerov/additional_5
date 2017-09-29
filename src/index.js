module.exports = function check(s, bracketsConfig) {
    var x = s.length+1;
    while(s = s.replace(/\<\>|\[\]|\{\}|\(\)|\|\||12|34|56|77|88/,'')){
        if(s.length==x && x!=0)return false;
        if(x==0)return true;
        x=s.length;
    }
    return true;
}
