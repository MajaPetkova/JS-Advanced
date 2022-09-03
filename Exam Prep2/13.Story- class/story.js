class Story {
    _comments;
    _likes;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        // return this;

    }
    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length == 1) {
            return `${[this._likes]} likes this story!`;

        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`


    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        } else if (username == this.creator) {
            throw new Error(`You can't like your own story!`)
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        }
        let usernameIndex = this._likes.indexOf(username);
        this._likes.splice(usernameIndex, 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        id = Number(id)
        let comment = {
            id,
            content,
            username,
            replies: []
        }
        if (!this._comments.some(x => x.id == id || id == undefined)) {
            comment.id = this._comments.length + 1;
            this._comments.push(comment);
            return `${username} commented on ${this.title}`
        } else {
            let currentComment = this._comments.find(x => x.id == id);
            let replay = { id: `${id}.${currentComment.replies.length +1}`, content, username }
            currentComment.replies.push(replay);
            return `You replied successefully`;
        }

    }
    toString(sortingType) {
        if (sortingType == 'asc') {
            this._comments.sort((a, b) => a.id - b.id)
                .forEach(c => {
                    c.replies.sort(a.id - b.id)
                });
        } else if (sortingType == 'desc') {
            this._comments.sort((a, b) => b.id - a.id)
                .forEach(c => {
                    c.replies.sort((a, b) => b.id - a.id)
                });
        } else if (sortingType == 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username))
                .forEach(x => {
                    x.replies.sort((a, b) => a.username.localeCompare(b.username))
                })
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`)

        this._comments.forEach(comment => {
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);
            comment.replies.forEach(reply => result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`));
        });


        return result.join('\n')
    }
}
let art = new Story("My Story", "Anny");
console.log(art)
art.like("John");
console.log(art._likes);
art.dislike("John");
console.log(art._likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));