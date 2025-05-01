import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function apiResponse(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { nome, idade } = req.body

    try {
        const newUser = await prisma.usuario.create({
            data: { nome, idade }
        })
        return res.status(201).json(newUser);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao criar usuário' });
    }

    return res.status(400).json({ error: "Método não permitido. Use GET." })
}
