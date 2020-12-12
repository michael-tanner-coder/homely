class Item {
  constructor(name = "MyItem", status = "Dirty", type = "", uid = "") {
    this.name = name;
    this.status = status;
    this.type = type;
    this.uid = uid;
  }
}

export default Item;
