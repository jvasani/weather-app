import React from "react";

class Weather extends React.Component {

    render() {
        return (

            <div className="weather_comp">
                {
                    this.props.city && this.props.country && <p className="w_key">Location: 
                    <span className="w__value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temprature && <p className="w_key">Temprature: <span className="w__value"> {this.props.temprature}</span>
                    </p>
                }
                {
                    this.props.humidity && <p className="w_key">Humidity: <span className="w__value"> {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.descreption && <p className="w_key">Conditions: <span className="w__value"> {this.props.descreption}</span>
                    </p>
                }
                {
                    this.props.error && <p className="w_key">Error: <span className="w__value"> {this.props.error}</span>
                    </p>
                }
            </div>
        );

    }
}

export default Weather;