import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import './EventGenre.css';

const EventGenre = ({ events }) => {
    
    const [ data, setData ] = useState([]);
    const [ total, setTotal ] = useState(0);

    useEffect(() => { 
        const data = getData();
        setData(data);
        setTotal(data.reduce((total, { value }) => total +value, 0))
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
        <PieChart width={400} height={300} >
            
            <Pie
                data={data}
                labelLine={false}
                outerRadius={80}
                innerRadius={75}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name} />))}
                </Pie>
                <Legend 
                    layout="vertical" 
                    content={() =>
                        <ul>
                            {data.map(
                                (entry, index) => <li key={entry.name} style={{color: colors[index]}}>{entry.name} {parseInt((entry.value*100) /total)}%</li>
                            )}
                        </ul>
                    }
                    
                />
        </PieChart>
    </ResponsiveContainer>
    </div>
)
}

export default EventGenre;