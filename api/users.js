import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function apiResponse(req, res) {
    if (req.method === "GET") {
        const message = "bom dia boa tarde boa noite"
        const users = await prisma.usuario.findMany()
        return res.status(200).json({ message, users })
    }

    return res.status(400).json({ error: "Método não permitido. Use GET." })
}
