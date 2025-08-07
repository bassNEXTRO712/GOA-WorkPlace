const router = (req,res) => {
    const {url,method} = req;

    if (url === '/tours' && method === 'GET'){
        return getTour(req,res)
    }
}

module.exports = router;