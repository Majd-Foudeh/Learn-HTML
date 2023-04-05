// class Node{
//     constructor(element){
//         this.element=element ;
//         this.next =null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     add(element){
//         let node=new Node(element);
//         let current;
//         if (this.head ==null) {
//             this.head=node;
//         }
//         else{

//         }

//     }
//     getFirst() {
//         return this.head;
//     }
// }

// let node1=new Node(2);
// node1.next=node2;
// let node2=new Node(4);
// node2.next=node3;
// let node3=new Node(6);
// node3.next=node4;
// let node4=new Node(8);

// let list =new LinkedList(node1);

// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor(head = null) {
//       this.head = head;
//     }

//     appendNode(newNode) {
//       let node = this.head;
//       if (node == null) {
//         //Means it's just empty list
//         this.head = newNode;
//         return;
//       }
//       while (node.next) {
//         node = node.next;
//       }
//       node.next = newNode;
//     }

//     getLast() {
//       let lastNode = this.head;
//       if (lastNode) {
//         while (lastNode.next) {
//           lastNode = lastNode.next;
//         }
//       }
//       return lastNode;
//     }

//     getFirst() {
//       // return first node (head node)
//       return this.head;

//       // return first node data (data inside head)
//       // return this.head.data;
//     }
//   }

//   const list = new LinkedList();

//   const n1 = new Node("first node");
//   const n2 = new Node("second node");
//   const n3 = new Node("third node");

//   list.appendNode(n1);
//   list.appendNode(n2);
//   list.appendNode(n3);

//   console.log(list.getLast());

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    InsertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++;
    }



    printdata() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }


    InsertLast(data) {
        let node = new Node(data);
        let current;
        if (this.head = null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            } 
            current.next = node;

        }
        this.size++;
    }

}
let list = new LinkedList();
list.InsertFirst(10);
list.InsertFirst(12);
list.InsertFirst(14);
list.InsertFirst(18);
list.InsertLast(15);
list.printdata();
console.log(list)


