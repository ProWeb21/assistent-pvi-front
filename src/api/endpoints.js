export const app_endpoint = "http:\/\/app.fakejson.com\/q"
export const users_endpoint = "https://app.fakejson.com/q/szUePJMK?token=SfetU3EFh4jQ5-LxMipQzQ"
export const protocols_endpoint = app_endpoint
export const fires_endpoint = app_endpoint
export const steps_endpoint = app_endpoint


export const users_payload = {
  "token": "SfetU3EFh4jQ5-LxMipQzQ",
  "parameters": {
     "code":  200,
     "delay": 3
  },
  "data": {
    "_repeat": 5,
    "id": "numberInt",
    "name": "stringWords|1,4",
    "shortname": "stringWords|2,1",
    "label": "stringCharacters|1,3"
  }
};

export const protocols_payload = {
  "token": "SfetU3EFh4jQ5-LxMipQzQ",
  "parameters": {
     "code":  200,
     "delay": 3
  },
  "data": {
    "_repeat": 5,
    "id": "numberInt",
    "name": "stringWords|1,4",
    "label": "stringCharacters|1,3"
  }
};

export const fires_payload = {
  "token": "SfetU3EFh4jQ5-LxMipQzQ",
  "parameters": {
     "code":  200,
     "delay": 4
  },
  "data": {
    "_repeat": 4,
    "id": "numberInt",
    "title": "stringWords|1,4",
    "type": "stringCharacters|1,3",
    "order": "stringDigits|1,1",
    "date": "dateTime",
    "location": "addressCoordinates"
  }
};


export const steps_payload = {
  token: "SfetU3EFh4jQ5-LxMipQzQ",
  parameters: {
     code:  200,
     delay: 3
  },
  data: {
    _repeat: 5,
    id: "numberInt",
    name: "stringWords|1,4",
    previous: "functionArray|2|stringCharacters|1,3",
    next: ""
  }
};
