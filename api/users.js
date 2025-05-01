export default async function apiResponse(req, res) {
    if (req.method == "GET") {
        const message = "bom dia boa tarde boa noite"
        res.status(200).json(message);
    } else {
        res.status(400).json("tem q set GET fela da puta")
    }
}