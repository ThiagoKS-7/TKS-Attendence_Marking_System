export default function checkUser(req, res) {
    if (req.params.id) {
        res.status(200).json({"id": req.params.id})
    } else {
        res.status(403).json()
    }
  }
  