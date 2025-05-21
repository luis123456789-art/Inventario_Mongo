import mongoose from "mongoose";

const categoriaShema = mongoose.Schema(
    {
    Imagen : {
        type: String,
        require: true,
        trim: true,
    },
    categoriaNombre: {
        type: String,
        require: true,
        trim: true,
    },
    Descripcion:{
        type: String,
        require: true,
        trim: true,
    },

},
{
    timestamps:true, 
}
);

const Categoria = mongoose.model("Categoria",categoriaShema)

export default Categoria;