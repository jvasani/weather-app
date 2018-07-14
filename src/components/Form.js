import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <span className="input input--minoru">
                    <input type="text" className="input__field input__field--minoru" name="city" placeholder="City" />
                    <label className="input__label input__label--minoru">
                        <span className="input__label-content input__label-content--minoru">city</span>
                    </label>
                    
                </span>
                <span className="input input--minoru">
                    <input type="text" className="input__field input__field--minoru" name="country" placeholder="Country" />
                    <label className="input__label input__label--minoru">
                        <span className="input__label-content input__label-content--minoru">Country</span>
                    </label>
                </span>
                <span className="input input--minoru ">
                    <button>Submit</button>
                </span>
            </form>
          
            
        );

    }
}

export default Form;