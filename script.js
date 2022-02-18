document.getElementById("currency").onchange =  function(e) {
    let url = "https://api.coingecko.com/api/v3/coins/" + document.getElementById("currency").value;
    fetch(url)
        .then(function(response) {
            //console.log(response.json())
            return response.json();
        }).then(function(json) {
            let info = '';
            info += '<div id="name-container">'
            info += '<h2 class="header">' + document.getElementById('currency').value.charAt(0).toUpperCase() + document.getElementById('currency').value.slice(1) + '</h2>';
            info += '<img src=';
            info += json.image.small;
            info += ' id="logo"></img>';
            info += '</div>'
            info += '<p>';
            info += json.description.en;
            if (json.description.en == "") {
                info += 'No description available.'
            }
            info += '</p>';
            info += '<p>';
            info += 'Current Price: $' + json.market_data.current_price.usd + '</p>';
            info += '<p>Market Cap: $' + json.market_data.market_cap.usd + '</p>';
            info += '<p>24 Hour High and Low: $' + json.market_data.high_24h.usd + ' $' + json.market_data.low_24h.usd + '</p>';
            document.getElementById('content').innerHTML = info;
        });
};