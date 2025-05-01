import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function updateUser(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === "PUT") {
        try {
            const { nome, idade } = req.body
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({ error: 'ID é necessário' });
            }
            const updatedUser = await prisma.usuario.update({
                where: { id: id},
                data: { nome, idade }
            });
            return res.status(200).json({status: "Usuário atualizado com Sucesso!", updatedUser})
        } catch (error) {
            console.log(`Erro ao atualizar o usuário: ${error}`);
            res.status(500).json({ error: 'Erro ao atualizar o usuário' });
        }
    }

    return res.status(400).json({ error: "Método não permitido. Use PUT." })
}
