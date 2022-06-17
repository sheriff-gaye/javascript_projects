let data = [
    {
        name: "sheriff",
        age: 30
    },
    {
        name: "ousman",
        age: 60
    },
    {
        name: "alassan",
        age: 20
    },
    {
        name: "ebrima",
        age: 23
    },
    {
        name: "jobix",
        age: 22
    },
    {
        name:"jonga",
        age:22
    }

];
const info=document.querySelector('#info');

let details=data.map(function(item){
    return '<div>' +item.name +'\t is' + '\t'+ item.age +'\tyears old'+ '</div>'
})

info.innerHTML=details.join('\n')