const{readFile,writeFile}=require('fs');
let emp=[
    {id: 1,name:'john'},
    {id: 2,name:'mad'},
    {id: 3,name:'muni'},
    {id: 4,name:'bhai'},
    {id: 5,name:'mahi'},
    {id: 6,name:'harish'},
    {id: 7,name:'peter'},
    {id: 8,name:'naresh'},
    {id: 9,name:'pavan'},
    {id: 10,name:'sai'},
];
writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err)throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err)throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});