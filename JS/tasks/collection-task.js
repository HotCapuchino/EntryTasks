let model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]
let grouppedModel = [];

function addPost(id, title, text) {
    return {
        id: id,
        title: title,
        text: text
    };
}

function groupByUsers() {
    for (const post of model) {
        let userWasFound = false;
        for (const user of grouppedModel) {
            if (user.id == post.user.id) {
                user.posts.push(addPost(post.id, post.title, post.text));
                userWasFound = true;
            }
            break;
        }
        if(!userWasFound) {
            grouppedModel.push({
                id: post.user.id,
                name: post.user.name,
                posts: []
            });
            grouppedModel[grouppedModel.length - 1].posts.push(addPost(post.id, post.title, post.text));
        }
    }
    for (const user of grouppedModel) {
        console.log(user);
    }
}

module.exports = {
    groupByUsers: groupByUsers
}