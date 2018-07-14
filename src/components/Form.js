import React from "react";

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                
                    <input type="text" className="input" name="city" placeholder="City" />
                    <input type="text" className="input" name="country" placeholder="Country" />
                
              
                    <button>Submit</button>
              
            </form>
          
            
        );

    }
}

export default Form;