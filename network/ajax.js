let xml = new XMLHttpRequest();
xml.open("get", 'https://jsonplaceholder.typicode.com/photos', true);

xml.addEventListener("load", () => {
    document.body.innerHTML = "loaded";
    console.log(xml.readyState);
    console.log(xml.getAllResponseHeaders());
    if (xml.status != 200) {
        console.log(`error ${xml.status} : ${xml.statusText}`);
    }
    else {
        console.log(xml.response.length);
        console.log(JSON.parse(xml.responseText)[0].url);
        let img = document.createElement("img");
        img.src = `${JSON.parse(xml.responseText)[0].url}`;
        img.setAttribute("width","300px");
        img.setAttribute("height","30px");
        document.body.appendChild(img)
    }
})
xml.addEventListener("progress", (e) => {
    document.body.innerHTML = "loading.....";
    console.log(xml.readyState);
    if (e.lengthComputable) {
        console.log(`received ${e.loaded} of ${e.total}`);
    }
    else {
        console.log(`received ${e.loaded}`);
    }
})
xml.addEventListener("error", () => {
    console.log("request failed");
})
// you can limit a request for a particular time after that if it does not get completed it would be canceled automaticaly
// xml.timeout=4000;
xml.send();