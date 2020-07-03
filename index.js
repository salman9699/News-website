console.log("news")

let source = "the-times-of-india";
let apikey = "aacffa2c296840ce8611705cb9bbf6a2";
let newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);

xhr.onload = function() {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(articles, index) {

            let news = `
                    <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}" style="color:black";>
                                  <b> Breaking News ${index+1}</b> : ${articles["title"]}
                                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordion">
                            <div class="card-body">
                                ${articles["description"]}.<a href = "${articles['url']}" target = "_blank">Read more here</a>
                            </div>
                        </div>
                    </div>`
            newsHtml += news;

        });

        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send();