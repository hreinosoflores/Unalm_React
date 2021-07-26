class Curso {

    constructor(
        id,
        codigo,
        nombre,
        creditos,
        horasTeoria,
        horasPractica,
        sumilla,
        createdAt,
        updatedAt
    ) {

        this.id = id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.creditos = creditos;
        this.horasTeoria = horasTeoria;
        this.horasPractica = horasPractica;
        this.sumilla = sumilla;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }


}

export default Curso;