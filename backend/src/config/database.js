require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Garante que vai ter uma coluna 'createdAt' e 'updatedAt'
    underscored: true, // Cria o nome das tabelas com caixa baixa e divido por underscore ao invés de camelcase
    underscoredAll: true, // mesma coisa de cima mas para colunas e relacionamentos
  },
};
