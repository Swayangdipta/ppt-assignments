class Branch {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
        this.parent = null
    }
}

const createTree = arr => {
    let root = new Branch(arr[0])
    let current = root
    for (let i = 1; i < arr.length; i++) {
        if(arr[i].length === 2){
            let left,right
            if(arr[i][1] > arr[i][0]){
                left = new Branch(arr[i][0])
                right = new Branch(arr[i][1])
            }else{
                left = new Branch(arr[i][1])
                right = new Branch(arr[i][0])
            }
            current.right = right
            current.left = left
            left.parent = current
            right.parent = current
            current = left
        }else if(arr[i].length === 1){
            let node = new Branch(arr[i][0]);
            if (current.left === null) {
              current.left = node;
            } else {
              current.right = node;
            }
            node.parent = current;
        }

        if (current.left !== null && current.right !== null) {
            current = current.left;
        } else if (current.left !== null) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return root
}

console.log(createTree([0,[3,2],[7,6],[10,34]]));