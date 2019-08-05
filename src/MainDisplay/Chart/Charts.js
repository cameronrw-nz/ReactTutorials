import React from "react";
import Chart from "react-chartjs-2";

function Charts() {
    let data = {
        labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
            "Another point"
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3, 80],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            },
            {
                label: "Number of things",
                data: [90, 98, 21, 7, 2, 67, 91],
                backgroundColor: "rgba(100, 99, 255, 0.2)",
                borderColor: "rgba(100, 99, 255, 1)",
                borderWidth: 1
            }
        ],
        maintainAspectRatio: true
    };
    return (
        <div>
            <Chart type="line" data={data} />
        </div>
    );
}

export default Charts;
