class Mensaje {

    constructor(
        id,
        nombres,
        apellidos,
        email,
        telefono,
        comentarios,
        createdAt,
        updatedAt
    ) {

        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.comentarios = comentarios;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }


}

export default Mensaje;