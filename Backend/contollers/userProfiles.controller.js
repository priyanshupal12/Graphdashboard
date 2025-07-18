export const personProfile = async (req, res) => {
    const store = req.body;
    res.status(200).json({ message: 'working', store });
}