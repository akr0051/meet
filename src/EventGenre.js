import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './EventGenre.css';

const EventGenre = ({ events }) => {
    
    const [data, setData] = useState([]);

    useEffect(() => { 
        setData(() => getData()); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [events]);


const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

const colors = ['#C99BE4', '#73D500', '#5AA7A7', '#FFDE00', '#FD4D7A']

const getData = () => {
    let data = genres.map((genre) => {
        const value = events.filter((event) => event.summary.split(' ').includes(genre)).length
        return { name: genre, value }
      });
      data = data.filter(data => data.value)
      return data;
    };


return (
    <div className="pie-container">
        <div className="pie-title">Technologies</div>
    <ResponsiveContainer height={508}>
        <PieChart width={400} height={400} >
            <Pie
                data={data}
                cy="20%"
                labelLine={false}
                outerRadius={95}
                innerRadius={90}
                fill="#8884d8"
                dataKey="value"
                // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
                {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name} />))}
                </Pie>
                <Legend 
                    layout="vertical" 
                    iconType="circle" 
                    iconSize="8" 
                    wrapperStyle={{bottom:40, left:48}}
                    payload={
                        data.map(entry => ({ 
                            value: `${entry.name} `,
                            type: "circle",
                            color: data.fill,
                            id: entry.name,
                        }))}
                    
                />
        </PieChart>
    </ResponsiveContainer>
    </div>
)
}

export default EventGenre;