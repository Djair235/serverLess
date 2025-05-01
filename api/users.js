import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function apiResponse(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }

    if (req.method === "GET") {
        const users = await prisma.usuario.findMany()
        return res.status(200).json(users)
    }

    return res.status(400).json({ error: "Método não permitido. Use GET." })
}
