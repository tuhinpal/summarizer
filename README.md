# Summarizer

Summarize a text, and send it through a HTTP API

### Request (CURL) :

```
curl --location --request POST 'localhost:8080/summary?sentence=1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text":"U.S. citizens wishing to visit India are responsible for requesting the correct type of visa from the Indian Embassy or Consulate. There are generally no provisions for changing your immigration category (e.g., from tourist to work visa) once you have entered the country. Indian visa regulations change frequently, often with little advance notice, and changes may be poorly advertised and inconsistently enforced. Travelers are urged to check the website of the Indian Embassy in Washington, D.C. before any travel to India to review the most current information. Indian visas may be obtained in the United States through Cox & Kings Global Services, the Government of India’s visa contractor. Diplomatic and Official visa applications, however, are accepted directly at the Indian Embassy and Consulates. Please review the information on the Cox & Kings Global Services website to determine your purpose for travel and the most appropriate visa category. All U.S. government employees, including military personnel, must obtain country clearance for travel to India. Once you have received your visa, check it carefully to ensure that the type of visa and number of entries is appropriate for your travel plans."
}'
```

### Response :

#### Success (200)

```
{
    "status": true,
    "summary": "Indian visas may be obtained in the United States through Cox & Kings Global Services, the Government of India’s visa contractor."
}
```

#### Error (200) - No Text object

```
{
    "status": false,
    "msg": "please provide text"
}
```

#### Error (200) - Error

```
{
    "status": false,
    "msg": "something went wrong"
}
```

### Deploy :

[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg "Deploy with Heroku")](https://heroku.com/deploy?template=https://github.com/cachecleanerjeet/summarizer "Deploy with Heroku")

[![Deploy+on+Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https://github.com/cachecleanerjeet/summarizer)

### License & Copyright :

- This Project is [Apache-2.0](https://github.com/cachecleanerjeet/summarizer/blob/master/LICENSE) Licensed
- Copyright 2021 by [Tuhin Kanti Pal](https://github.com/cachecleanerjeet)
