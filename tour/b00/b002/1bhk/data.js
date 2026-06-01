var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
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
        "yaw": -0.016086341688929195,
        "pitch": -0.11464396913283181,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.21068574768425563,
          "pitch": 0.25521505089627716,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
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
        "yaw": 0.0002241508000242476,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.9661627220619842,
          "pitch": 0.5886486203589101,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -0.2573513736494597,
          "pitch": 0.6282519801877218,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": 1.271572430754773,
          "pitch": 0.02688324068147807,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.791452462635469,
          "pitch": 0.16238552352291435,
          "rotation": 4.71238898038469,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
        "yaw": 0.13425609630723834,
        "pitch": 0.12594370739340377,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.2288086582978828,
          "pitch": 0.8765266468443293,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
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
        "yaw": -1.0622735385111888,
        "pitch": 0.385119710826741,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.9013242650062363,
          "pitch": 0.705321973990447,
          "rotation": 5.497787143782138,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "Bathroom",
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
        "yaw": 2.266695655190576,
        "pitch": 0.6446383157486917,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.9614115712404576,
          "pitch": 0.16026066698584174,
          "rotation": 4.71238898038469,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Demo Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
