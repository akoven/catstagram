window.onload = async () => {
  const header = document.createElement("h1");
  header.innerText = "kitten pic";
  const image = document.createElement("img");
  // let url = 'https://cdn2.thecatapi.com/images/ccc.png'
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const body = await res.json();
  const url = body[0].url;

  //console.log(url);
  image.src = `${url}`;
  document.body.append(header, image);

  //add in-line styling
  //change size of image
  image.style.width = "500px";
  image.style.height = "500px";

  document.body.style.backgroundColor = "purple";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.alignItems = "center";
  document.querySelector("html").style.height = "1000px";
  document.querySelector("html").style.width = "1000px";
  document.querySelector("html").style.display = "flex";
  document.querySelector("html").style.justifyContent = "center";
  document.querySelector("html").style.alignItems = "center";
};
// window.onload();
