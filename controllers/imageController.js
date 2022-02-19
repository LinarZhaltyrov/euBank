const Images = require('../models/images')

class imageController {
    async getImages(req, res) {
        try {
            const { imageArray } = req.body
            imageArray.map((it) => {
                const image = Images.create({
                    image: it
                })
                return image
            })
            res.json({message: 'изображения получены'})
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async returnImages(req, res) {
        try {
            const id = req.session.user.userId
            const allImage = await Images.findAll({
                where: {
                    userId: id
                }
            })
            res.json(allImage)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async returnOneImage(req, res) {
        try {
            const id = req.params.id
            const oneImage = await Images.findOne({
                where: {
                    imageId: id
                }
            })
            res.json(oneImage)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = new imageController