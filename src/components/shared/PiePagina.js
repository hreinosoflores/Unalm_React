import React from 'react';


export default function PiePagina() {

    var date = new Date();

    return (
        <footer className="bg-white fixed-bottom text-center text-secondary py-3 px-3 shadow-sm">
            <span>
                Universidad Nacional Agraria La Molina |
                Todos los derechos reservados ® {date.getFullYear()} |
                Desarrollado en React v18  <img src="/img/favicon.ico" width="32" alt="react" />
            </span>
        </footer>
    );
}


// class PiePagina extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         };
//     }

//     render() {
//         return (
//             <footer className="bg-white fixed-bottom text-center text-secondary py-3 px-3 shadow-sm">
//                 <span>
//                     Universidad Nacional Agraria La Molina |
//                     Todos los derechos reservados ® {this.state.date.getFullYear()} |
//                     Desarrollado en React v18  <img src="/img/favicon.ico" width="32" alt="react" />
//                 </span>
//             </footer>
//         );
//     }
// }

// export default PiePagina;