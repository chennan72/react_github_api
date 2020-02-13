import React, {Component} from 'react';

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


export default class Repo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            repos: [],
            data: []
        };
    }

    componentWillMount() {
        let dataSource = []
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
            .then(response => response.json())
            .then(repos => {
                    this.setState({repos: repos, name: this.props.params.username});
                    this.state.repos.map(repo => {
                            dataSource.push({label: repo.name, value: repo.forks})
                        }
                    )
                }
            ).then(() => {
            console.log(dataSource);
            this.setState({data: dataSource})
        })
    }

    render() {
        console.log(this.state.data);
        // STEP 3 - Creating the JSON object to store the chart configurations
        const chartConfigs = {
            type: "column2d", // The chart type
            width: "1200", // Width of the chart
            height: "600", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
                // Chart Configuration
                chart: {
                    //Set the chart caption
                    caption: this.state.name + "'s Forks of Repos",
                    //Set the chart subcaption
                    subCaption: "Only for Public Repositories",
                    //Set the x-axis name
                    xAxisName: "Repo Name",
                    //Set the y-axis name
                    yAxisName: "Forks",
                    // numberSuffix: "K",
                    //Set the theme for your chart
                    theme: "fusion"
                },
                // Chart Data
                data: this.state.data
            }
        };

        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Language</th>
                        <th scope="col">Forks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.repos.map(repo =>
                        <tr>
                            <td>{repo.name}</td>
                            <td>{repo.language}</td>
                            <td>{repo.forks}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <ReactFC {...chartConfigs} />
            </div>
        )
    }
}
