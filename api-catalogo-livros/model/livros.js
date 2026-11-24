import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    estoque: {
        type: Number,
        required: true
    },
    sinopse: {
        type: String
    }

});

export const Livro = mongoose.model("Livro", livroSchema, "livros");
