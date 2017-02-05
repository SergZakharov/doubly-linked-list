const Node = require('./node');

class LinkedList {
    constructor(_head=null,_tail=null,length=0)
     {
      this._head= _head;
      this._tail= _tail;
      this.length=length;        // no elements
     }

    append(data) {
        var new_node = new Node(data)
        var prev = this._tail;

        if (this.length===0)        //epmty

        {
          this._head = new_node;
          this._tail = new_node;
        }
        else {
          this._tail = new_node;
          this._tail.prev = prev;
          this._tail.prev.next = this._tail;
        }
        this.length++;
        return this;
    }

    head() {
      if (this._head){
      return this._head.data}
      else {
        return null;   // not  head
      }
    }

    tail() {
      if (this._tail){
      return this._tail.data}
      else {
        return null;          // not tail
      }
    }

    at(index) {
      var node=this._head; //first node
      var pt=0;            //pointer -> first node
      while (node)
      {
        if (pt!=index)     // search for index
             {node=node.next;pt++;}
        else {return node.data;} //found
      }
    }

    insertAt(index, data) {
      var node = this._head;
      var pt = 0;

      while (node) {
          if (index!=pt){
            node = node.next; //search for index
            pt++;
          }
          else {
            var at_insert = node;
            //------------------------insert
            node.data = data;
            node.prev = at_insert.prev;
            node.next = at_insert;
            //------------------------
            node.prev.next = node;
            node.next.prev = node;
            return node.data;
              }
          }
    return this;
    }

    isEmpty() {
             if (this._head===this._tail&&this._head===null)
             {return true}  //head = tail -> empty
             else
             {return false}  //not empty
    }

    clear() {
      this.length=0;     //set head=tail
      this._tail = null; //set pointers to 0
      this._head = null;
      return this;
    }

    deleteAt(index) {
        var node = this._head;
        var pt = 0;
        while (node) {
          if (index!=pt){
            node = node.next; //search for index
            pt++;
          }
          else {
            //-------------------------------
            if (node.next)
                {
                 node.prev.next = node.next;
                }
                else
                {node.next=null;}  // end egde
            //-------------------------------
            if (node.prev)
                {
                 node.next.prev = node.prev;
               }
                 else
                 {node.prev=null;} //top edge
            //-------------------------------
            node = null;
            this.length--;
            return this;
          }
        }
      return this;
    }

    reverse() {
            //----------------------
            var current = this._tail;
            this._tail = this._head;
            this._head = current;
            //----------------------
            var tmp_node = this._head;
            //----------------------

            for (var i = 0; i < this.length ; i++)
            {
                var prev = tmp_node.prev;
                tmp_node.prev = tmp_node.next;
                tmp_node.next = prev;
                tmp_node = tmp_node.next;
            }

        return this;
    }

    indexOf(data) {
      var node = this._head;
      var pt= 0;
      while (node) {
          if (node.data!=data)
          {
            node=node.next;       //search
            pt++;
          }
          else
          {
            return pt;            //found
          }
      }
      return -1;                 // case no data
    }

}

module.exports = LinkedList;
