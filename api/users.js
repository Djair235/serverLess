export default async function apiResponse(req, res) {
    const message = "bom dia boa tarde boa noite bucetinha "
    res.status(200).json({ message });
}