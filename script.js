function getCatPic(){
    let url = "https://aws.random.cat/meow" //create a variable for the url of the api
    let image = document.getElementById("catPic")
    fetch(url)  //make code grab api using the url address
    .then((response) => response.json())    //setting responses from api to a json file
    .then(data => {     //function data does what's written below(idk?)
      image.src = data.file  // sets source of image to the data of the api  
    })                                                  //in this case, the data is called "file" so use data.file
  }

getCatPic()