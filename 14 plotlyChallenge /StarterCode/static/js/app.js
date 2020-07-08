
let url = '14 plotlyChallenge /StarterCode/samples.json'

d3.json(url).then(function(data){
    console.log(data)

    let names = data.names

    names.forEach(d=>{
        d3.select('#selDataset').append('option').text(d).property('value',d)
    })

    // Static Bar Chart

    let values = data.samples[0].sample_values.slice(0,10).reverse()
    let ids = data.samples[0].otu_ids.slice(0,10).map(d => `OTU ${d}`)
    let labels = data.samples[0].otu_labels.slice(0,10)

    let trace = {
        x:values,
        y:ids,
        type:'bar',
        text:labels,
        orientation:'h'
    }

    let plotData = [trace]

    Plotly.newPlot('bar',plotData)

    //  Static Bubble Chart

    let bubbleValues = data.samples[0].sample_values
    let bubbleIds = data.samples[0].otu_ids
    let bubbleLabels = data.samples[0].otu_labels

    let traceBubble = {
        x: bubbleIds,
        y: bubbleValues,
        mode: 'markers',
        text: bubbleLabels,
        marker: {
          size: bubbleValues,
          color: bubbleIds
        }
    }

    var dataBubble = [traceBubble];

    Plotly.newPlot('bubble', dataBubble);

    // Static Demographics
    let demographicsID = data.metadata[0].id
    let demographicsEthnicity = data.metadata[0].ethnicity
    let demographicsGender = data.metadata[0].gender
    let demographicsAge = data.metadata[0].age
    let demographicsLocation = data.metadata[0].location
    let demographicsBBtype = data.metadata[0].bbtype
    let demographicsWfreq = data.metadata[0].wfreq
    let table = d3.select('tbody')
    let row = table.append('tr')
    let cell = row.append('td')
    cell.text(`Id: ${demographicsID}`)
    let row2 = table.append('tr')
    let cell2 = row2.append('td')
    cell2.text(`Ethnicity: ${demographicsEthnicity}`)
    let row3 = table.append('tr')
    let cell3 = row3.append('td')
    cell3.text(`Gender: ${demographicsGender}`)
    let row4 = table.append('tr')
    let cell4 = row4.append('td')
    cell4.text(`Age: ${demographicsAge}`)
    let row5 = table.append('tr')
    let cell5 = row5.append('td')
    cell5.text(`Location: ${demographicsLocation}`)
    let row6 = table.append('tr')
    let cell6 = row6.append('td')
    cell6.text(`BB Type: ${demographicsBBtype}`)
    let row7 = table.append('tr')
    let cell7 = row7.append('td')
    cell7.text(`Washing Freq: ${demographicsWfreq}`)

    // Static Gauge

    let dataGauge = [
        {
          type: "indicator",
          mode: "gauge+number",
          value: demographicsWfreq,
          title: { text: "Washing Frequency", font: { size: 24 } },
          gauge: {
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
            bar: { color: "#696969" },
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "#696969",
            steps: [
              { range: [0, 1], color: "#E0FFFF" },
              { range: [1, 2], color: "#B0E0E6" },
              { range: [2, 3], color: "#90EE90" },
              { range: [3, 4], color: "#98FB98" },
              { range: [4, 5], color: "#00FA9A" },
              { range: [5, 6], color: "#00FF7F" },
              { range: [6, 7], color: "#3CB371" },
              { range: [7, 8], color: "#2E8B57" },
              { range: [8, 9], color: "#006400" },
            ],
          }
        }
      ];
      
      let layout = {
        width: 500,
        height: 400,
        margin: { t: 25, r: 25, l: 25, b: 25 },
        paper_bgcolor: "white",
        font: { color: "#696969", family: "Arial" }
      };
      
      Plotly.newPlot('gauge', dataGauge, layout);
})



d3.json(url).then(function(data){

    let input = d3.select('#selDataset')
    input.on('change',function(){

        // Dinamic Bar Chart

        let newText = d3.event.target.value;
        let values2 = data.samples.filter(d=> d.id == newText)[0].sample_values.slice(0,10).reverse()
        let ids2 = data.samples.filter(d=> d.id == newText)[0].otu_ids.slice(0,10).map(d => `OTU ${d}`)
        let labels2 = data.samples.filter(d=> d.id == newText)[0].otu_labels.slice(0,10)

        let trace2 = {
            x:values2,
            y:ids2,
            type:'bar',
            text:labels2,
            orientation:'h'
        }

        let plotData2 = [trace2]

        Plotly.newPlot('bar',plotData2)



        // Dinamic Bubble Chart

        let bubbleValues2 = data.samples.filter(d=> d.id == newText)[0].sample_values
        let bubbleIds2 = data.samples.filter(d=> d.id == newText)[0].otu_ids
        let bubbleLabels2 = data.samples.filter(d=> d.id == newText)[0].otu_labels
    
        let traceBubble2 = {
            x: bubbleIds2,
            y: bubbleValues2,
            mode: 'markers',
            text: bubbleLabels2,
            marker: {
              size: bubbleValues2,
              color: bubbleIds2
            }
        }
    
        var dataBubble2 = [traceBubble2];
    
        Plotly.newPlot('bubble', dataBubble2);
    

        // Dinamic Demographics
        
        let demographicsID = data.metadata.filter(d=> d.id == newText)[0].id
        let demographicsEthnicity = data.metadata.filter(d=> d.id == newText)[0].ethnicity
        let demographicsGender = data.metadata.filter(d=> d.id == newText)[0].gender
        let demographicsAge = data.metadata.filter(d=> d.id == newText)[0].age
        let demographicsLocation = data.metadata.filter(d=> d.id == newText)[0].location
        let demographicsBBtype = data.metadata.filter(d=> d.id == newText)[0].bbtype
        let demographicsWfreq = data.metadata.filter(d=> d.id == newText)[0].wfreq
        let table = d3.select('tbody')

        table.html('')
        let row = table.append('tr')
        let cell = row.append('td')
        cell.text(`Id: ${demographicsID}`)
        let row2 = table.append('tr')
        let cell2 = row2.append('td')
        cell2.text(`Ethnicity: ${demographicsEthnicity}`)
        let row3 = table.append('tr')
        let cell3 = row3.append('td')
        cell3.text(`Gender: ${demographicsGender}`)
        let row4 = table.append('tr')
        let cell4 = row4.append('td')
        cell4.text(`Age: ${demographicsAge}`)
        let row5 = table.append('tr')
        let cell5 = row5.append('td')
        cell5.text(`Location: ${demographicsLocation}`)
        let row6 = table.append('tr')
        let cell6 = row6.append('td')
        cell6.text(`BB Type: ${demographicsBBtype}`)
        let row7 = table.append('tr')
        let cell7 = row7.append('td')
        cell7.text(`Washing Freq: ${demographicsWfreq}`)

        // Static Gauge

        let dataGauge = [
            {
            type: "indicator",
            mode: "gauge+number",
            value: demographicsWfreq,
            title: { text: "Washing Frequency", font: { size: 24 } },
            gauge: {
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "#696969" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "#696969",
                steps: [
                { range: [0, 1], color: "#E0FFFF" },
                { range: [1, 2], color: "#B0E0E6" },
                { range: [2, 3], color: "#90EE90" },
                { range: [3, 4], color: "#98FB98" },
                { range: [4, 5], color: "#00FA9A" },
                { range: [5, 6], color: "#00FF7F" },
                { range: [6, 7], color: "#3CB371" },
                { range: [7, 8], color: "#2E8B57" },
                { range: [8, 9], color: "#006400" },
                ],
            }
            }
        ];
        
        let layout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            paper_bgcolor: "white",
            font: { color: "#696969", family: "Arial" }
        };
        
        Plotly.newPlot('gauge', dataGauge, layout);

    })


})

