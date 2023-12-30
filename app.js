const notifier=require('node-notifier');
const https=require('https');
const path=require('path');
weather();
setInterval(weather,5000);
function weather()
{
    const url= "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=7acd5855bc3eb903f12c19880cccf4e7&units=metric";
    https.get(url,function(response)
    {
        response.on('data',function(data)
        {
            let thedata=JSON.parse(data);
            let summary="Temperature: "+thedata.main.temp+ "\u00B0C\n"+ "Description: "+thedata.weather[0].description;
            notifier.notify(
                {
                    title:'Weather app',
                    message:summary,
                    icon: path.join(__dirname,'Weather-image.jpeg')
                }
            );
        });
    });
}