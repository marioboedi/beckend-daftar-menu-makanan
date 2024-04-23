const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require ('./routes/product.route.js')
const app = express()

// middleware
app.use(express.json())

// routes
app.use("/api/products", productRoute)


app.get('/', (req, res)=>{
    res.send('Hello from Node API ')
})



// MENAMPILKAN DAFTAR PRODUK
// app.get('/api/products', async(req, res) =>{
//     try{
//         const products = await Product.find({})
//         res.status(200).json(products)
//     }catch(error){
//         res.status(500).json({massage: error.massage})
//     }
// })

// MENAMPILKAN SALAH SATU PRODUK
// app.get('/api/product/:id', async(req, res) =>{
//     try{
//         const{id} = req.params
//         const product = await Product.findById(id)
//         res.status(200).json(product)
//     }catch(error){
//         res.status(500).json({massage: error.massage})
//     }
// })

// UPDATE PRODUCT
// app.put('/api/product/:id', async (req, res) => {
//     try{
//         const {id} = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body)

//         if(!product){
//             return res.status(404).json({message: "Barang tidak ditemukan"})
//         }
//         res.status(200).json(product)

//         // const updateProduct = await Product.findById(id)

//     }catch(error){
//         res.status(500).json({message: error.massage})
//     }
// })

// MENGINPUT PRODUK
// app.post('/api/products', async (req, res) => {
//     try{
//         const product = await Product.create(req.body)
        
//         // const duplikat = await Product.find(({product})=> product.nama === ProductSchema.nama)
//         // if(duplikat){
//         //     return res.status(409).json({message: "Barang sudah ada"})
//         // }
//         res.status(200).json(product)
//     }catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// MENGHAPUS PRODUK
// app.delete('/api/product/:id', async (req, res) => {
//     try{
//         const {id} = req.params
//         const product = await Product.findByIdAndDelete(id)
//         if(!product){
//             return res.status(404).json({message:"Produk tidak ditemukan"})
//         }
//         res.status(200).json({message:"Produk berhasil dihapus"})

//     }catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

mongoose.connect('mongodb://127.0.0.1:27017/CRUD')
  .then(() => {
    console.log('Connected to DATABASE')
    app.listen(4000, () => {
        console.log('Server is running on port 4000')
    })
});