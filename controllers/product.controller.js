const Product = require('../models/product.model')

// FUNCTION MENAMPILKAN DAFTAR PRODUK
const getProducts = async (req, res) =>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({massage: error.massage})
    }
}

// FUNCTION MENAMPILKAN SALAH SATU PRODUK
const getProduct = async (req, res) =>{
    try{
        const{id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({massage: error.massage})
    }
}

// FUNCTION UPDATE PRODUK
const updateProduct = async (req, res) =>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product){
            return res.status(404).json({message: "Barang tidak ditemukan"})
        }
        res.status(200).json(product)

        // const updateProduct = await Product.findById(id)

    }catch(error){
        res.status(500).json({message: error.massage})
    }
}

// FUNCTION MENGINPUT PRODUK
const createProduct = async (req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

// FUNCTION MENGHAPUS SALAH SATU PRODUK
const deleteProduct = async (req, res) =>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:"Produk tidak ditemukan"})
        }
        res.status(200).json({message:"Produk berhasil dihapus"})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
    deleteProduct,
}