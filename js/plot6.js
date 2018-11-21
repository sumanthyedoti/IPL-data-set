
Promise.all([d3.json("../data/matchesJSON.json"), d3.json("../data/deliveriesJSON.json")])
.then(arr => {
    let [matches, deliveries]=arr;
    const seasonIds = getSeasonIds(matches);
    let SAWatson={};
            let player='SR Watson';
            //let runsPerSeason={};
            //let econPerSeason={};
            for(let delivery of deliveries){
                let year=0;
                
                if(delivery.batsman==player){
                    if(!SAWatson.hasOwnProperty(year)){
                        SAWatson[year]={"runs":parseInt(delivery.total_runs)}
                    }else{
                        SAWatson[year].runs+=parseInt(delivery.total_runs);
                    }
                }else if(delivery.bowler==player){
                    let isExtra=delivery.extra_runs>0?1:0;
                    if(!SAWatson.hasOwnProperty(year)){
                        SAWatson[year]={};
                        //SAWatson[year].bowl={"runs":parseInt(delivery.total_runs),
                                        // "deliveries":1,
                                        // "extras":isExtra};  
                    }else{
                        // SAWatson[year].bowl.runs=SAWatson[year].bowl.runs+parseInt(delivery.total_runs);
                        // SAWatson[year].bowl.deliveries++;
                        // SAWatson[year].bowl.extras=SAWatson[year].bowl.extras+isExtra;
                    }
                }
            }
            console.log(SAWatson);
                                    
            // Highcharts.chart('container', {
            // title: {
            // text: 'Matches won by all teams over all the years of IPL'
            // },
            // subtitle: {
            // text: 'Source: thesolarfoundation.com'
            // },
            // xAxis: {
            //         categories: Object.keys(yearlyWins),
            //         labels: {
            //         style: {
                //             color: 'black',
                //             fontSize:'12px',
                //             fontWeight:""
                //         }
                //         }
            // },
            // yAxis: {
                //     title: {
                    //         text: ''
                    //     }
                    // },
                    // legend: {
            // layout: 'vertical',
            // align: 'right',
            // verticalAlign: 'middle'
            // },
            // series: matchesWon,
            
            // responsive: {
                // rules: [{
                    //     condition: {
                        //     maxWidth: 500
                        //     },
                        //     chartOptions: {
            //     legend: {
                //         layout: 'horizontal',
                //         align: 'center',
                //         verticalAlign: 'bottom'
                //     }
                //     }
                // }]
                // }
                // });
 }).catch((console.log));


    function getSeasonIds(data){
        let seasonIds={};
        for(let element of data){
            if(!seasonIds.hasOwnProperty(element.season)){
                seasonIds[element.season]=[element.id];
            }else{
                seasonIds[element.season].push(element.id);
            }
        }
        return seasonIds;
    }