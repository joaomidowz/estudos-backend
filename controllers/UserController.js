const User = require("../models/User");

const UserController = {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    const userId = req.params.id;
    const userData = req.body;

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
      await user.update(userData)
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async delete(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
      await user.destroy()

      res.json({ message: "Usuário exlcuído com sucesso!"})
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
