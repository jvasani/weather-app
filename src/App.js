import React from "react";
import Titles from "./components/Title";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "d1c81dca18e2dc4eb49dc00eddbf3743";
class App extends React.Component {
    state = {
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        descreption: undefined,
        error: undefined,
    }

    getWeather = async (e) => {
        e.preventDefault();

        const ct = e.target.elements.city.value;
        const ctry = e.target.elements.country.value;
        var API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ct},${ctry}&appid=${API_KEY}&units=metric`);
        const data = await API_CALL.json();

        //console.log("this is api call", +API_CALL);
        console.log(data);


        if (ct && ctry) {
            const city = data.name;
            const country = data.sys.country;
            const temp = data.main.temp;
            const humidity = data.main.humidity;

            console.log(city, country, temp, humidity, data.weather[0].description)
            this.setState({
                city: city,
                country: country,
                temprature: temp,
                humidity: humidity,
                descreption: data.weather[0].description,
                error: "",
            });
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                temprature: undefined,
                humidity: undefined,
                descreption: undefined,
                error: "Please enter the values...",
            });
        }
    }
    render() {
        return (

            <div className="main">
                <div className="wrapper">
                    <div className=" title_comp">
                        <Titles />
                    </div>
                    <div className="form_comp">
                        <Form getWeather={this.getWeather} />
                        <Weather
                            temprature={this.state.temprature}
                            city={this.state.city}
                            country={this.state.country}
                            humidity={this.state.humidity}
                            descreption={this.state.descreption}
                            error={this.state.error} />
                    </div>
                </div>
            </div>


        );
    }
}

export default App;