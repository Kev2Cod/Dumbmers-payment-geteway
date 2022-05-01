const { transaction, product, user } = require("../../models");

// =========== BUY PRODUCT =============
exports.buyProduct = async (req, res) => {
  try {
    const data = req.body;
    const buyProduct = await transaction.create({
      ...data,
      idBuyer: req.user.id,
    });

    res.status(200).send({
      status: "Success",
      message: "Buy Product Success",
      data: {
        transaction: {
          id: buyProduct.id,
          idProduct: buyProduct.idProduct,
          idBuyer: buyProduct.idBuyer,
          idSeller: buyProduct.idSeller,
          price: buyProduct.price,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: "Buy Products Failed",
      message: "Server Error",
    });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    let data = await transaction.findAll({
      attributes: {
        exclude: ["idProduct", "idBuyer", "idSeller", "updatedAt"],
      },
      include: [
        {
          model: product,
          as: "product",
          attributes: {
            exclude: ["desc", "qty", "idUser", "createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          as: "buyer",
          attributes: {
            exclude: ["password", "idUser", "createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          as: "seller",
          attributes: {
            exclude: ["password", "idUser", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    data = JSON.parse(JSON.stringify(data));

    data = data.map((item) => {
        return{
            ...item,
            product: {
                ...item.product,
                image: process.env.FILE_PATH + item.product.image
            }
        }
    }) 

    res.status(200).send({
      status: "Get data Transaction Success",
      data
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: "Get data Transactions Failed",
      message: "Server Error",
    });
  }
};
