var data = {
    nodes: [],
    edges: []
};

//Make nodes
for (var i = 0; i < 12; i++) {
    data.nodes.push({
        id: i,
        label: i.toString()
    })
}

//Make Edges
//Make Couples
// for (var i = 1; i <= 10; i += 2) {
//     data.edges.push({
//         from: i,
//         to: i + 1
//     })
// }
//Make edges
//[0, 5]
for (var i = 0; i < 6; i++) {
    //[0, 5]
    for (var j = 6; j < 13; j++) {
        data.edges.push({
            from: i,
            to: (i+6)%6
        })
    }
}

// create an array with nodes
var nodes = new vis.DataSet(data.nodes);

// create an array with edges
var edges = new vis.DataSet(data.edges);

// create a network
var container = document.getElementById('mynetwork');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    physics: {
        enabled: true
    },
    layout: {
        improvedLayout: true
    }
};
var network = new vis.Network(container, data, options);