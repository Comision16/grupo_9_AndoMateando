const db = require('../../database/models')

const addImageProduct = async (req,res) => {

    const {idProduct} = req.params;

    try {
        if(!idProduct) throw new Error('El ID del producto es obligatorio')

        if(!req.files[0]) throw new Error('Debes subir una imagen');

        const image = req.files[0].filename;

        const newImage = {
            file : image,
            productsId : idProduct
        }

        await db.Image.create(newImage);

        const images = await db.Image.findAll({
            where : {
                productsId : idProduct
            }
        })


        return res.status(200).json({
            ok: true,
            msg : 'Imagen guardada con éxito',
            images
            
          });

    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un problema ",
          });
    }
}

const deleteImageProduct = async (req,res) => {

    try {

        const {idImage} = req.params;

        if(!idImage) throw new Error('El ID de la imagen es obligatoria')

        const {productsId} = await db.Image.findByPk(idImage)

        await db.Image.destroy({
            where : {
                id : idImage
            }
        })

        const images = await db.Image.findAll({
            where : {
                productsId
            }
        })

        return res.status(200).json({
            ok: true,
            msg: 'Imagen eliminada con éxito',
            images
            
          });

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un problema ",
          });
    }

}

const changeImageProduct = async (req,res) => {

    try {
        const {idProduct} = req.params;

        if(!idProduct) throw new Error('El ID del producto es obligatorio')

        if(!req.files[0]) throw new Error('Debes subir una imagen');

        const newImage = req.files[0].filename;

        await db.Products.update(
            {
                image : newImage
            },
            {
                where : {
                    id: idProduct
                }
            }
          )

          const {image} = await db.Products.findByPk(idProduct)

          return res.status(200).json({
            ok: true,
            msg : 'Imagen actualizada con éxito',
            image : image
            
          });


        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un problema ",
          }); 
    }
}

const getImagesByProduct = async (req,res) => {
    try {

        if(!idProduct) throw new Error('El ID del producto es obligatorio')

        const images = await  db.Image.findAll({
            where : {
                productsId : idProduct
            }
        })

        return res.status(200).json({
            ok: true,
            images
            
          });

        
    } catch (error) {
        return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un problema ",
          });  
    }
}


module.exports = {
    addImageProduct,
    deleteImageProduct,
    changeImageProduct,
    getImagesByProduct
}