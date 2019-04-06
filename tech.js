function http(){
    this.xhr = new XMLHttpRequest;
}

//get Request
http.prototype.get = function(url,callback){

    this.xhr.open("GET",url,true);
   
    let self = this;
    this.xhr.onload = function(){
    if(self.xhr.status == 200){
        callback(self.xhr.responseText);
    }
  }

    this.xhr.send();
}

//get tech news
const myhttp = new http;
myhttp.get("https://newsapi.org/v2/everything?q=technology&language=en&apiKey=4322279a06aa468eafd5e22e265cc2fd",function(response){
    const data = (JSON.parse(response));

    const articles = data.articles;

    articles.forEach(function(article){
        document.querySelector(".tech-content").innerHTML +=
         `<div class="row my-5 p-3 border-top border-secondary">
            <div class="col-md-4">
                <img class="img-fluid" src="${article.urlToImage}">
            </div>
            <div class="col-md-8">
                <h3>${article.title}</h3>
                <p class="lead">${article.author}<span class="ml-5 pl-5">Published At : ${article.publishedAt}</span></p>
                <p>${article.description}</p>
                <p><strong>Read full article</strong> :<a href="${article.url}">${article.url}</a></p>
            </div>
          </div>`;
    })
});