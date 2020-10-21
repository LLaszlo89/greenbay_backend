export class ItemsController {
  constructor({ itemsRepository, userRepository }) {
    this.itemsRepository = itemsRepository;
    this.userRepository = userRepository;
  }

  async getItemsForSale(req, res) {
    try {
      const data = await this.itemsRepository.showAllItems();
      data.results.length === 0
        ? res.status(404).json({ message: "No items found" })
        : res.status(200).json(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async getItemsById(req, res) {
    try {
      const id = req.params.id;
      const data = await this.itemsRepository.showSpecialItems(id);
      data.results.length === 0
        ? res.status(404).json({ message: "Item not found" })
        : res.status(200).json(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  async createNewItems(req, res) {
    try {
      const item = req.body;
      const response = await this.itemsRepository.saveNewItem(item);
      if (response.results.affectedRows > 0) {
        res.status(201).json("Item created");
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);

    }
  }

  async makeItemSold(req, res) {
    try {
      const { id, name } = req.body;
      const user_cash = await this.userRepository.user(name);
      const isForSale = await this.itemsRepository.showSpecialItems(id);

      if (!isForSale.results[0].forSale) {
        res.status(404).json({ message: "Item is already sold" });
      } else {
        const new_balance = user_cash.results[0].cash_balance - isForSale.results[0].price;

        if (new_balance <= 0) {
          res.status(400).json({ message: ` Your balance is not enough to purchase the item ` });
        } else {
           await this.userRepository.updateUser( name, new_balance );
           await this.itemsRepository.updateItemStatus( id, name );
        }
        res.status(200).json({
          message: `Thank you for your purchase! You new balance is : ${new_balance} green_$ `,
          cash:new_balance
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
