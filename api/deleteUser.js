import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function deleteUser(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === "DELETE") {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({ error: 'ID é necessário' });
            }
            const deletedUser = await prisma.usuario.delete({
                where: { id: id}
            });
            return res.status(200).json({status: "Usuário deletado com Sucesso!", deletedUser})
        } catch (error) {
            console.log(`Erro ao deletar o usuário: ${error}`);
            res.status(500).json({ error: 'Erro ao deletar o usuário' });
        }
    }

    return res.status(400).json({ error: "Método não permitido. Use DELETE." })
}
