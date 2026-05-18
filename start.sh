#!/bin/sh

# Hentikan proses jika ada error
set -e

echo "Menjalankan Database Migration..."
# GANTI BAGIAN INI dengan perintah migrasi yang Anda gunakan
# Contoh untuk Sequelize:  npx sequelize-cli db:migrate
# Contoh untuk Prisma:     npx prisma migrate deploy
# Contoh untuk TypeORM:    npm run typeorm migration:run
npx auth@latest migrate --yes

echo "Migration selesai. Memulai aplikasi Express..."
# GANTI BAGIAN INI dengan perintah untuk menjalankan Express Anda
node lib/index.ts
