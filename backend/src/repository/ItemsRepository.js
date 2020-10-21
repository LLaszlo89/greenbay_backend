import { db } from "../data/connection";

export default class ItemsRepository {
  constructor() {}

  async showAllItems() {   
    return await db.query("SELECT * FROM items WHERE forSale = true");
  }
  async showSpecialItems(id) {
    return await db.query("SELECT * FROM items WHERE id = ?",  [id]  );
  }
  async saveNewItem({ user_name, title, description, URL, price }) {

    return await db.query(
      "INSERT INTO items (user_name, title, description, URL, price )VALUES(?,?,?,?,?)",
      [user_name, title, description, URL, price ]
    );
  }
  async updateItemStatus(id , name) {
    return await db.query( `UPDATE items set forSale = false , soldTo=? WHERE id=?`, [ name , id] );
  }
}
