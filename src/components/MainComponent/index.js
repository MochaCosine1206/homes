import React, { Component } from "react";
import API from '../../utils/API'
import Nav from "../Nav"
import "./style.css";


class MainComponent extends Component {
    state = {
        allHomes: [],
    };

    componentDidMount() {
        API.getData()
            .then(res => {
                this.setState({ allHomes: res.data.Homes })
            })
    }

    filterData = search => {
            console.log(search)
                API.getData()
                .then(res => {
                    if(!search){
                        this.setState({ allHomes: res.data.Homes })
                    } else {
                        let filteredHomes = res.data.Homes.filter((home) => {
                            return (home.Description.toLowerCase().includes(search.toLowerCase()) ||
                            home.HomeId.toLowerCase().includes(search.toLowerCase()))})
                        this.setState({ allHomes: filteredHomes })
                    }
                    
                })
            
        
    }


    render() {

        return (
            <div id="mainContent">
                <Nav 
                allHomes={this.state.allHomes}
                filterData={this.filterData}
                />
            </div>
        );
    }

}

export default MainComponent;