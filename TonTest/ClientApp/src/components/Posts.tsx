import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';
import * as WeatherForecastsStore from '../store/WeatherForecasts';

type CounterProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;




const Posts = () => {

    const [lstData, setlstData] = React.useState([] as any);

    React.useEffect(() => {
        Getdata();
    }, []);

    const Getdata = async () => {
        const response = await fetch('https://localhost:44341/api/Heros/Get_lst');
        const myJson = await response.json();
        setlstData(myJson);
    }

    return (
        <>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User ID</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {lstData.map((m: WeatherForecastsStore.lstUser) =>
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.userId}</td>
                            <td>{m.title}</td>
                            <td>{m.body}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default Posts;

