window.onload = () =>{
    const header = document.createElement("h1")
    header.innerText = "kitten pic";
    const image = document.createElement("img");
    // let url = 'https://cdn2.thecatapi.com/images/ccc.png'
    let url = fetch("https://api.thecatapi.com/v1/images/0SxW2SQ_S")
    // .then(res => { res.json() });
    // .then(body => {body.url});
    image.src = `${url}`
    document.body.append(header,image)
};
// window.onload();
