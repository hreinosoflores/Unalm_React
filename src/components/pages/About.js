import React, { useEffect } from 'react';

export default function About() {

    useEffect(() => {
        document.title = window.$title + '¿Quiénes somos?';
    }, []);

    return (
        <div className="p-4 shadow rounded">
            <div className="text-center">
                <span className="text-center display-6 amarillo">¿Quiénes somos?</span>
            </div>
            <br />
            <p className="lead text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales sapien mattis mauris aliquet
                congue. Fusce dictum consectetur nibh, non ornare enim. Nunc tincidunt posuere dignissim. Sed
                sollicitudin libero nec metus dapibus consectetur. Proin at mauris et est semper tristique quis ut
                purus. Nam lorem turpis, tincidunt nec enim eget, pellentesque consequat neque. Morbi tempor metus et
                diam bibendum, vitae tempus magna aliquet. Mauris ornare orci et tellus pellentesque luctus non quis
                nulla. Donec aliquet pellentesque nunc. Etiam vel faucibus libero, a maximus nulla.
            </p>
            <p className="lead text-white">
                Vestibulum eleifend lacus mauris, vitae consequat turpis commodo ac. In pretium, tellus eu egestas
                vulputate, neque est malesuada odio, ut ornare nisi felis sed nunc. Vivamus et magna et felis faucibus
                varius nec ac felis. Sed eu ultrices augue, sit amet hendrerit quam. In venenatis lectus nisi, sed
                aliquet ante venenatis sit amet. Suspendisse pellentesque risus elit, vel porttitor eros vehicula ut.
                Vivamus a ultricies turpis. Donec quam mi, ullamcorper mattis interdum quis, posuere vitae arcu. Ut
                efficitur, mi sed interdum placerat, nunc lectus posuere risus, et maximus purus ligula ac felis.
                Praesent quis sodales velit. Praesent commodo nibh ut felis tempus malesuada.
            </p>
            <p className="lead text-white">
                Quisque interdum dictum turpis, sit amet fringilla eros scelerisque et. Donec quam neque, suscipit at
                tortor sed, porttitor fermentum mi. Vivamus non lacinia magna. Curabitur finibus volutpat quam. Nunc
                interdum lectus sed sapien tincidunt porttitor. Vestibulum ornare pulvinar leo ac elementum. Duis non
                nulla semper, rhoncus enim id, porta nisi. Maecenas non urna id nisl consequat interdum vel mattis orci.
                Vestibulum bibendum felis eu sapien blandit, nec fermentum sem sagittis. Phasellus efficitur dui turpis,
                a gravida felis ultricies vel. Nulla eget lorem ultricies turpis suscipit viverra.
            </p>
            <p className="lead text-white">
                Mauris non quam nisl. Ut mauris nulla, rhoncus eget dictum at, ullamcorper eu lacus. Curabitur venenatis
                mattis lorem eu sagittis. Nulla facilisi. Sed maximus dapibus eleifend. Donec ut pulvinar neque.
                Suspendisse blandit, tellus at placerat accumsan, elit nibh scelerisque nisl, vitae dignissim erat nisi
                sed enim. Phasellus pretium leo sit amet erat pharetra, vel egestas diam luctus. Aliquam nec pharetra
                odio. Vivamus malesuada massa tortor, vel fringilla enim imperdiet ut. Aenean fringilla convallis augue
                nec ornare. Maecenas varius justo arcu, nec aliquam metus ullamcorper porta. Donec aliquet vitae lectus
                a imperdiet. Suspendisse in ultricies elit. Nam tempor, mi quis imperdiet accumsan, augue velit
                malesuada purus, eget luctus ipsum ex id metus. Pellentesque nec commodo nisl.
            </p>
            <p className="lead text-white">
                Nunc finibus interdum justo, sed mattis felis congue nec. Fusce finibus, sapien nec aliquet sodales,
                nisi leo consectetur ipsum, ut volutpat diam metus nec leo. Proin non augue eros. Praesent fringilla,
                sem eu tempus volutpat, lorem erat venenatis diam, aliquam scelerisque diam sem at dolor. In eros est,
                placerat tristique nisi sit amet, blandit vulputate turpis. Curabitur ac sodales dui. Donec et
                vestibulum augue.
            </p>
            <p className="lead text-white">
                Aliquam erat volutpat. Aliquam at ipsum ac tortor viverra auctor blandit a sapien. Nulla facilisi. Nunc
                scelerisque ut odio sit amet suscipit. Fusce elit diam, pharetra pulvinar eleifend in, posuere cursus
                nunc. Duis dapibus tincidunt finibus. Nulla sed mi tempor, scelerisque mauris vel, iaculis sapien. Cras
                leo justo, efficitur vitae mattis auctor, sollicitudin non dolor. Curabitur et elementum lorem. Vivamus
                tempor ullamcorper vestibulum. Vivamus quis aliquet mi, nec elementum massa.
            </p>

        </div>

    );
}







// class About extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount(){
//         document.title = window.$title + '¿Quiénes somos?';
//     }

//     render() {
//         return (
//             <div className="p-4 shadow rounded">
//                 <div className="text-center">
//                     <span className="text-center display-6 amarillo">¿Quiénes somos?</span>
//                 </div>
//                 <br />
//                 <p className="lead text-white">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales sapien mattis mauris aliquet
//                     congue. Fusce dictum consectetur nibh, non ornare enim. Nunc tincidunt posuere dignissim. Sed
//                     sollicitudin libero nec metus dapibus consectetur. Proin at mauris et est semper tristique quis ut
//                     purus. Nam lorem turpis, tincidunt nec enim eget, pellentesque consequat neque. Morbi tempor metus et
//                     diam bibendum, vitae tempus magna aliquet. Mauris ornare orci et tellus pellentesque luctus non quis
//                     nulla. Donec aliquet pellentesque nunc. Etiam vel faucibus libero, a maximus nulla.
//                 </p>
//                 <p className="lead text-white">
//                     Vestibulum eleifend lacus mauris, vitae consequat turpis commodo ac. In pretium, tellus eu egestas
//                     vulputate, neque est malesuada odio, ut ornare nisi felis sed nunc. Vivamus et magna et felis faucibus
//                     varius nec ac felis. Sed eu ultrices augue, sit amet hendrerit quam. In venenatis lectus nisi, sed
//                     aliquet ante venenatis sit amet. Suspendisse pellentesque risus elit, vel porttitor eros vehicula ut.
//                     Vivamus a ultricies turpis. Donec quam mi, ullamcorper mattis interdum quis, posuere vitae arcu. Ut
//                     efficitur, mi sed interdum placerat, nunc lectus posuere risus, et maximus purus ligula ac felis.
//                     Praesent quis sodales velit. Praesent commodo nibh ut felis tempus malesuada.
//                 </p>
//                 <p className="lead text-white">
//                     Quisque interdum dictum turpis, sit amet fringilla eros scelerisque et. Donec quam neque, suscipit at
//                     tortor sed, porttitor fermentum mi. Vivamus non lacinia magna. Curabitur finibus volutpat quam. Nunc
//                     interdum lectus sed sapien tincidunt porttitor. Vestibulum ornare pulvinar leo ac elementum. Duis non
//                     nulla semper, rhoncus enim id, porta nisi. Maecenas non urna id nisl consequat interdum vel mattis orci.
//                     Vestibulum bibendum felis eu sapien blandit, nec fermentum sem sagittis. Phasellus efficitur dui turpis,
//                     a gravida felis ultricies vel. Nulla eget lorem ultricies turpis suscipit viverra.
//                 </p>
//                 <p className="lead text-white">
//                     Mauris non quam nisl. Ut mauris nulla, rhoncus eget dictum at, ullamcorper eu lacus. Curabitur venenatis
//                     mattis lorem eu sagittis. Nulla facilisi. Sed maximus dapibus eleifend. Donec ut pulvinar neque.
//                     Suspendisse blandit, tellus at placerat accumsan, elit nibh scelerisque nisl, vitae dignissim erat nisi
//                     sed enim. Phasellus pretium leo sit amet erat pharetra, vel egestas diam luctus. Aliquam nec pharetra
//                     odio. Vivamus malesuada massa tortor, vel fringilla enim imperdiet ut. Aenean fringilla convallis augue
//                     nec ornare. Maecenas varius justo arcu, nec aliquam metus ullamcorper porta. Donec aliquet vitae lectus
//                     a imperdiet. Suspendisse in ultricies elit. Nam tempor, mi quis imperdiet accumsan, augue velit
//                     malesuada purus, eget luctus ipsum ex id metus. Pellentesque nec commodo nisl.
//                 </p>
//                 <p className="lead text-white">
//                     Nunc finibus interdum justo, sed mattis felis congue nec. Fusce finibus, sapien nec aliquet sodales,
//                     nisi leo consectetur ipsum, ut volutpat diam metus nec leo. Proin non augue eros. Praesent fringilla,
//                     sem eu tempus volutpat, lorem erat venenatis diam, aliquam scelerisque diam sem at dolor. In eros est,
//                     placerat tristique nisi sit amet, blandit vulputate turpis. Curabitur ac sodales dui. Donec et
//                     vestibulum augue.
//                 </p>
//                 <p className="lead text-white">
//                     Aliquam erat volutpat. Aliquam at ipsum ac tortor viverra auctor blandit a sapien. Nulla facilisi. Nunc
//                     scelerisque ut odio sit amet suscipit. Fusce elit diam, pharetra pulvinar eleifend in, posuere cursus
//                     nunc. Duis dapibus tincidunt finibus. Nulla sed mi tempor, scelerisque mauris vel, iaculis sapien. Cras
//                     leo justo, efficitur vitae mattis auctor, sollicitudin non dolor. Curabitur et elementum lorem. Vivamus
//                     tempor ullamcorper vestibulum. Vivamus quis aliquet mi, nec elementum massa.
//                 </p>

//             </div>

//         );
//     }
// }

// export default About;