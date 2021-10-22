const data = [{
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
    points: "2",
    replies: [
    {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
        points: "3",
        replies: [
        {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8"
        }
        ]
    },
    {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
        points: "2"
    }
    ]
}];

function render(data, cont) {
    const fragment = new DocumentFragment();
    for(let node of data){
        const el = createElem(node)
        // console.log(el)
        node?.replies?.forEach(element => {
            // var ul = document.createElement('ul')
            // console.log(ul)
            render([element], el)
        });
        fragment.append(el)
    }
    cont.append(fragment)
}

function createElem(node) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var p1 = document.createElement('p');
    p1.textContent = node.body;
    var p2 = document.createElement('p');
    p2.style.fontSize = '10px';
    p2.style.color = 'lightgrey';
    p2.textContent = `By: ${node.author}  Date: ${node.timestamp.split(' ').slice(0,5)} Points: ${node.points}`
    li.append(p1, p2)
    ul.append(li);
    return ul;
}

render(data, document.getElementById('container'))