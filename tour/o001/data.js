var APP_DATA = {
  "scenes": [
    {
      "id": "0-way-of-entry",
      "name": "Way of Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.2532935027326282,
        "pitch": 0.0156837285770397,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.08056531310549886,
          "pitch": 0.42237774491009183,
          "rotation": 0,
          "target": "1-interior-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-interior-",
      "name": "Interior ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -2.6037163643993626,
        "pitch": 0.16560754507810138,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.395401436152987,
          "pitch": 0.6562721892052075,
          "rotation": 4.71238898038469,
          "target": "2-interior-main_1"
        },
        {
          "yaw": -2.2304600588030308,
          "pitch": 0.7126579209173372,
          "rotation": 3.141592653589793,
          "target": "0-way-of-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-interior-main_1",
      "name": "Interior Main_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.38950091192929115,
        "pitch": 0.20465505514791893,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.2952352853110831,
          "pitch": 0.7073041258625405,
          "rotation": 11.780972450961727,
          "target": "1-interior-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
