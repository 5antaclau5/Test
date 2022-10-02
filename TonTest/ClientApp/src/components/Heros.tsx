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




const Heros = () => {

    const [lstHero, setlstHero] = React.useState([] as any);

    const [selectname, setnameHero] = React.useState("");
    React.useEffect(() => {
        console.log("T1")
        Getdata();
    }, []);

    const Getdata = async () => {
        const response = await fetch('https://localhost:44341/api/Heros/Get_Hero');
        const myJson = await response.json();
        setlstHero(myJson);
    }

    return (
        <>
            <h3>My Heros</h3>
            {
                lstHero.map((m: WeatherForecastsStore.lstHero) =>
                    <tr key={m.heroname} style={{ display: "list-item" }}>
                        <a onClick={() => setnameHero(m.heroname)} >{m.heroname}</a>
                    </tr>
                )
            }
            <h3>My hero is : {selectname}</h3>
        </>
    );
}

export default Heros;

