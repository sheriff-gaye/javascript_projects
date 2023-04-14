

function mySet(){

    var collection=[];

    this.has=function(element){
        return (collection.indexOf(element)!==-1);
    }
}