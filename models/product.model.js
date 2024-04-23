const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        nama: {
            type: String,
            required: [true, 'Tolong masukkan barang'],
        },

        jumlah: {
            type: Number,
            required: [true,],
            default: 0
        },
        
        harga: {
            type: Number,
            required: true,
            default: 0
        },
        
        gambar: {
            type: String,
            required: false
        },
    },

    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product