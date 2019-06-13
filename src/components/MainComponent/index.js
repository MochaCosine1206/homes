import React, { Component } from "react";
import API from '../../utils/API'
import Nav from "../Nav"
import Card from "../Card"
import "./style.css";


class MainComponent extends Component {
    state = {
        homes: [],
    };

    componentDidMount() {
        API.getData()
            .then(res => {
                console.log(res.data)
                this.setState({ homes: res.data.Homes })
            })
    }

    // getData = () => {
    //     API.getData()
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({ homes: res.data.Homes })
    //     })
    //     .catch(err => console.log(err))
    // } 

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });

    // };

    // handleButttonSubmit = (event) => {
    //     this.setState({ city: event })
    //     this.getWeather(event);
    // };

    render() {

        return (
            <div id="mainContent">
                <Nav />
                {this.state.homes.map(home => (
                    <Card
                    key={home.Id}
                    id={home.Id}
                    name={home.Description}
                    modelNumber={home.HomeId}
                    thumbnail={home.ThumbnailImage}
                    ></Card>
                ))}
            </div>
        );
    }

}

export default MainComponent;