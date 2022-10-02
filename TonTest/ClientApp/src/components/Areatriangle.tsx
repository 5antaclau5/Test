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




const Areatriangle = () => {


    const [result, setresult] = React.useState(0);
    React.useEffect(() => {
        Getdata();
    }, []);

    const Getdata = async () => {
        var data = {
            BaseAreatriangle: 5,
            HighAreatriangle: 3
        }
        const response = await fetch('https://localhost:44341/api/Heros/Areatriangle', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const myJson = await response.json()
        console.log("myJson", myJson);
        setresult(myJson.area);
    }

    return (
        <>
            <h3> Base 5 and High 3 area : {result}</h3>
        </>
    );
}

export default Areatriangle;

