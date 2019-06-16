import React, { Component } from "react";
import API from '../../utils/API'
import ContentContainer from "../ContentContainer"
import "./style.css";


class MainComponent extends Component {
    state = {
        allHomes: [],
    };

    componentDidMount() {
        API.getData()
            .then(res => {
                //get all data on mount
                this.setState({ allHomes: res.data.Homes })
            })
    }

    filterData = search => {
            console.log(search)
                API.getData()
                .then(res => {
                    //if there is a search term, filter results by the search result
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

    filterFeatures = selection => {
            API.getData()
            .then(res => {
                //if the selected array is defined, filter the data by feature chosen
                if(selection === undefined || selection.length == 0){
                    this.setState({ allHomes: res.data.Homes })
                } else {
                    let filteredHomes = res.data.Homes.filter((home) => {
                        return (home.Features.includes(...selection) )})
                    this.setState({ allHomes: filteredHomes })
                }
                
            })
        
    
}


    render() {

        return (
            <div id="mainContent">
                <ContentContainer 
                allHomes={this.state.allHomes}
                //function to filter by name and model
                filterData={this.filterData}
                //functino to filter by feature
                filterFeatures={this.filterFeatures}
                // get all of the features, and reduce the arrays to one sorted array without duplicates, send as props
                allFeatures={[...[...new Set(this.state.allHomes.map(home => home.Features).flat())]]}
                />
            </div>
        );
    }

}

export default MainComponent;