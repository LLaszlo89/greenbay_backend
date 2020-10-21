import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { setupDI, container } from "../di-setup";

setupDI();

const sessionController = container.resolve("sessionController");
const itemsController = container.resolve("itemsController");
const authenticateMiddleware = container.resolve("authenticateMiddleware");

const router = express.Router();
router.use(cors());
router.use(bodyParser.json());


router.post("/session", (req, res) => {
  sessionController.post(req, res);
});

router.post("/register", (req, res) => {
  sessionController.createNewUser(req, res);
});

router.use((req, res, next) =>
  authenticateMiddleware.authenticate(req, res, next)
);

router.get("/items", (req, res) => {
  itemsController.getItemsForSale(req, res);
});



router.post("/items", (req, res) => {
  itemsController.createNewItems(req, res);
});

router.get("/items/:id", (req, res) => {
  itemsController.getItemsById(req, res);
});

router.put("/items", (req, res) => {
  itemsController.makeItemSold(req, res);
});

export default router;
