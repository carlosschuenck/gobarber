import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    /**
     * req -> requisição do express
     * file -> todos os dados do arquivo
     */
    filename: (req, file, callBack) => {
      // gera um caracteres aleatórios
      crypto.randomBytes(16, (err, res) => {
        if (err) return callBack(err);

        // extname pega a extensão do arquivo pelo nome da imagem
        return callBack(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
