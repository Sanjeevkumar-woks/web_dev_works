let toupper= (name)=>{
    return name.toUpperCase();
}

let revercename=(name)=>{
    return name.reverce();
}

let nameHandller= (name,callback)=>{
    return callback(name);
}
console.log(nameHandller("sanjeev",toupper));