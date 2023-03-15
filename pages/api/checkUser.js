export default function checkUser(req, res) {
    if (req.user) {
        res.status(200).json(req.user)
    }
    res.status(403).json()
  }
  