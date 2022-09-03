function getArticleGenerator(articles) {

    return () => {
        if (articles.length > 0) {
            let container = document.getElementById('content');
            let artical = document.createElement('article');
            let currentText = articles.shift();
            artical.innerText = currentText;
            container.appendChild(artical);
        }
    }
}