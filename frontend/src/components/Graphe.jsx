import React, { PureComponent } from 'react';
import '../App.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Données pour le graphique
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
];

// Component pour le graphique utilsant BarChart de recharts
const Graphe = ({ item }) => (
    <div class="mid_box">

        {/* <ResponsiveContainer width="100%" height="75%"> */}


        <BarChart class="Barchart"
            width={300}
            height={200}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >

            <CartesianGrid class="CartesianGrid" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />

        </BarChart>
        {/* </ResponsiveContainer> */}


    </div >

);

export default Graphe;


// import React, { PureComponent } from 'react';
// import '../App.css';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// function GetGraphData(all_publi) {

//     var data = [
//         {
//             name: 'Page A',
//             Age: 0,
//             amt: 2400,
//         },
//         {
//             name: 'Page B',

//             Age: 0,
//             amt: 2210,
//         },
//         {
//             name: 'Page C',

//             Age: 0,
//             amt: 2290,
//         },
//         {
//             name: 'Page D',

//             Age: 0,
//             amt: 2000,
//         },
//         {
//             name: 'Page E',

//             Age: 0,
//             amt: 2181,
//         },

//     ];

//     console.log("GETGARPH : " + all_publi);
//     // const publi = all_publi.item;
//     // console.log("GETGARPH rr : " + publi);

//     // for (const publi of all_publi.item) {

//     // if (publi.title == "azertg") {
//     //     data[0].Age += 1;
//     // }
//     // data[1].Age += 1;

//     // data[2].Age += 1;
//     // }

//     return data;
// }


// const Graphe = (items) => (

//     <div class="mid_box">

//         {/* <ResponsiveContainer width="100%" height="75%"> */}

//         <BarChart class="Barchart"
//             width={300}
//             height={200}
//             data={GetGraphData(items)}
//             margin={{
//                 top: 20,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//         >

//             <CartesianGrid class="CartesianGrid" strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//             <Bar dataKey="uv" stackId="a" fill="#82ca9d" />

//         </BarChart>
//         {/* </ResponsiveContainer> */}


//     </div >

// );

// export default Graphe;