// let fe = fetch("https://dummyjson.com/products").then(data =>data.json()).then(data=>console.log(data));

// same above code using async await
async function getData() {
    let fe = await fetch("https://dummyjson.com/products");
    if (fe.ok) {
        let data = fe.json();
        return data;
    }
    else {
        return null;
    }


}
// getData().then(e=>console.log(e));
// getData().then(e => console.log(e));

//making post request
// let fet = fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": 'application/json'
//     },
//     body: JSON.stringify({ title: 'hello', description: 'this is a test', userId: 348098 })
// }).then(res => res.json()).then(e=>console.log(e));


// lets create a url
let u =new URL("https://www.google.com/news");
// same as above
let ur=new URL("/news","https://www.google.com")

console.log(u.href,ur.href);

/*href is the full url, same as url.toString()
protocol ends with the colon character :
search – a string of parameters, starts with the question mark ?
hash starts with the hash character #
there may be also user and password properties if HTTP authentication is present: http://login:password@site.com (not painted above, rarely used).*/ 