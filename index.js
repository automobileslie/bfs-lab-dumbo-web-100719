function bfs(rootNode, vertices, edges){ 
    let finalArray = [];
    let queue = [];
    queue.push(rootNode);
    let i;
    while(queue.length > 0){
    let arrayForQueue = findAdjacent(queue[0].name, vertices, edges);  
    for(i = 0; i < arrayForQueue.length; i++){
        queue.push(arrayForQueue[i]);
    }
    finalArray.push(queue.shift());
    }
    return finalArray;
}

function findAdjacent (vertex, vertices, edges) {
    let edgesFound = [];
    for (let i = 0; i < edges.length; i++){
        if(edges[i].includes(vertex)){
            edgesFound.push(edges[i]);
        }
    }
    for(let n = 0; n < edgesFound.length; n++){
        if(edgesFound[n][0]===vertex){
            edgesFound[n].shift();
        }
        else{
            edgesFound[n].pop();
        }
    }
    edgesFound = edgesFound.flat();
    let adjacentVertices = [];
    for(let p = 0; p < vertices.length; p++){
        if(edgesFound.includes(vertices[p].name)){
            if(vertices[p].distance === null){
                adjacentVertices.push(vertices[p]); 
            }
        }
    }

    return adjacentVertices;
}
function markDistanceAndPredecessor (node, adjacentNodes) {
    for(let i = 0; i < adjacentNodes.length; i++){
        adjacentNodes[i].predecessor = node;
        adjacentNodes[i].distance = node.distance + 1;
    }

    return adjacentNodes;
}


//example: vertex = '34th&6th'

// vertices:
// [ { name: '34th&6th', distance: 0, predecessor: null }, 
// { name: '23rd&6th', distance: null, predecessor: null }, 
// { name: '28th&Bwy', distance: null, predecessor: null }, 
// { name: '14th&6th', distance: null, predecessor: null }, 
// { name: '23rd&Bwy', distance: null, predecessor: null }, 
// { name: '14th&Lex', distance: null, predecessor: null }, 
// { name: '23rd&Lex', distance: null, predecessor: null } ] 

// edges:
// [ [ '14th&6th', '23rd&6th' ], 
// [ '23rd&6th', '34th&6th' ], 
// [ '34th&6th', '28th&Bwy' ], 
// [ '28th&Bwy', '23rd&Bwy' ], 
// [ '23rd&Bwy', '14th&Lex' ], 
// [ '14th&Lex', '23rd&Lex' ] ]