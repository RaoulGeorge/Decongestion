import React from "react";
import Map from "./../map";
import { Card, Table, Button, Container, Row, Col } from "reactstrap";
import "./dashboard.scss";


function PlotGraph(cr_data,bi_Data,cab_Data,walk_Data){
 var carData = cr_data ? [cr_data["0:10"]&&cr_data["0:10"].length,(cr_data["10:20"]&&cr_data["10:20"].length)||0,(cr_data["20:30"]&&cr_data["20:30"].length)||0,(cr_data["30:40"]&&cr_data["30:40"].length)||0,(cr_data["40:50"]&&cr_data["40:50"].length)||0] :[49.9, 71.5, 106.4, 129.2, 144.0];
  var bikeData = bi_Data ?[(bi_Data["0:10"]&&bi_Data["0:10"].length)||0,(bi_Data["10:20"]&&bi_Data["10:20"].length)||0,(bi_Data["20:30"]&&bi_Data["20:30"].length)||0,(bi_Data["30:40"]&&bi_Data["30:40"].length)||0,(bi_Data["40:50"]&&bi_Data["40:50"].length)||0] :[83.6, 78.8, 98.5, 93.4];
  var cabData = cab_Data ? [(cab_Data["0:10"]&&cab_Data["0:10"].length)||0,(cab_Data["10:20"]&&cab_Data["10:20"].length)||0,(cab_Data["20:30"]&&cab_Data["20:30"].length)||0,(cab_Data["30:40"]&&cab_Data["30:40"].length)||0,(cab_Data["40:50"]&&cab_Data["40:50"].length)||0] :[48.9, 38.8, 39.3, 41.4];
  var walkData = walk_Data ? [(walk_Data["0:10"]&&walk_Data["0:10"].length)||0,(walk_Data["10:20"]&&walk_Data["10:20"].length)||0,(walk_Data["20:30"]&&walk_Data["20:30"].length)||0,(walk_Data["30:40"]&&walk_Data["30:40"].length)||0,(walk_Data["40:50"]&&walk_Data["40:50"].length)||0] :[42.4, 33.2, 34.5, 39.7, 52.6];
window.Highcharts.chart('graphContainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Data Analysis'
    },
    xAxis: {
        categories: [
            '04:00',
            '04:10',
            '04:20',
            '04:30',
            '04:40',
            '04:50',
        ],
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Numbers '
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    
    series: [{
        name: 'car',
        data:carData

    }, {
        name: 'bike',
        data: bikeData

    }, {
        name: 'cab',
        data: cabData

    }, {
        name: 'walk',
        data: walkData

    }]
});
}



function Dashboard(props) {
  var dataArray = [];
  let stateData = props.location.state.data;
  function getTotal() {
    return props.location.state.data.length;
  }
  function getPeopleBetWeenSlot(
    startTime,
    startDuration,
    Endduration,
    reduceTotal = false
  ) {
    var tempArray = [],
      totalLength,
      FilterLength;
    totalLength = stateData.length;
    var mapData = stateData.filter(function(value) {
      const time = value.Time_Slot.split(".");
      const min = parseInt(time[0]);
      const sec = parseInt(time[1]);
      if (min === 4 && (sec >= startDuration && sec <= Endduration)) {
        tempArray.push(value);
      }
      return !(min === 4 && (sec >= startDuration && sec <= Endduration));
    });

    dataArray[startDuration + ":" + Endduration] = tempArray;
    if (reduceTotal) stateData = mapData;
    FilterLength = totalLength - mapData.length;
    return { FilterLength, totalLength };
  }

  function showGraph(start, end) {
    
    var carData =[],bikeData=[],walkData =[],cabData = [];
    let data = dataArray;

    var keys = Object.keys(data);

     for(var i =0 ;i <keys.length ;i++){
       console.log(dataArray[keys[i]]);
       dataArray[keys[i]].forEach(function(element){
        if(element.transport === "cab"){
          if(!cabData[keys[i]]){
            cabData[keys[i]] = []
          }
          cabData[keys[i]].push(element);
            // cabData.push(element);
        }else if (element.transport === "bike"){
           if(!bikeData[keys[i]]){
            bikeData[keys[i]] = []
          }
          bikeData[keys[i]].push(element);
          // bikeData.push(element);
        }
        else if(element.transport === "walk"){
           if(!walkData[keys[i]]){
            walkData[keys[i]] = []
          }
          walkData[keys[i]].push(element);
          // walkData.push(element)
        }else if(element.transport === "car"){
           if(!carData[keys[i]]){
            carData[keys[i]] = []
          }
          carData[keys[i]].push(element);
          // carData.push(element)
        }
       })
     }

    
    PlotGraph(carData,bikeData,cabData,walkData);
  }

  return (
    <div className="Dashboard">
      <Container>
        <h1> Dashboard </h1>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Time slot</th>
              <th>People</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={() => showGraph(0, 10)}>
              <th scope="row">1</th>
              <td>4:00 to 4:10</td>
              <td>{getPeopleBetWeenSlot(4, 0, 10).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 0, 10, true).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(10, 20)}>
              <th scope="row">2</th>
              <td>4:10 to 4:20</td>
              <td>{getPeopleBetWeenSlot(4, 10, 20).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 10, 20, true).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(20, 30)}>
              <th scope="row">3</th>
              <td>4:20 to 4:30</td>
              <td>{getPeopleBetWeenSlot(4, 20, 30).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 20, 30, true).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(30, 40)}>
              <th scope="row">4</th>
              <td>4:30 to 4:40</td>
              <td>{getPeopleBetWeenSlot(4, 30, 40).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 30, 40, true).totalLength}</td>
            </tr>
            <tr onClick={() => showGraph(40, 50)}>
              <th scope="row">5</th>
              <td>4:40 to 4:50</td>
              <td>{getPeopleBetWeenSlot(4, 40, 50).FilterLength}</td>
              <td>{getPeopleBetWeenSlot(4, 40, 50, true).totalLength}</td>
            </tr>
          </tbody>
        </Table>

        <div className="map-container">
          <Map loc={props.location.state.Location} />
        </div>
        <div id="graphContainer" className="graphContainer">
            
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
