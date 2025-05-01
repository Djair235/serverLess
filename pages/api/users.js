export default async function apiResponse(req, res) {
    if (req.method == "GET") {
        res.status(200).json({message: "bom dia boa tarde boa noite"})
    }
}