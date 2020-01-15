import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    const checkIsProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkIsProvider) {
      return res
        .status(401)
        .json({ error: 'Only providers can load notifications' });
    }
    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);
    return res.json(notifications);
  }

  async update(req, res) {
    // O método busca por ID e já atualiza
    const notification = await Notification.findByIdAndUpdate(
      req.params.id, // id do registro
      {
        read: true, // a propriedade que eu quero atualizar
      },
      {
        new: true, // Depois de atualizar ele retorna o registro atualizado
      }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
