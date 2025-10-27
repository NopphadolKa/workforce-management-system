1. Install React
npm create vite@latest client -- --template react

2. Install Tailwind
https://tailwindcss.com/docs/installation/using-vite

npm install tailwindcss @tailwindcss/vite

3. JSON Server
 - npm i json-server

 {
  "personnel": [
    {
      "id": "1",
      "name": "สมชาย ใจดี",
      "position": "หัวหน้าเวร",
      "avatar": "👨‍✈️"
    },
    {
      "id": "2",
      "name": "สมหญิง รักงาน",
      "position": "รองหัวหน้า",
      "avatar": "👩‍✈️"
    },
    {
      "id": "3",
      "name": "วิชัย มานะ",
      "position": "เจ้าหน้าที่",
      "avatar": "👨‍💼"
    },
    {
      "id": "4",
      "name": "สุดา สวยงาม",
      "position": "เจ้าหน้าที่",
      "avatar": "👩‍💼"
    },
    {
      "id": "5",
      "name": "ประยุทธ ขยัน",
      "position": "เจ้าหน้าที่",
      "avatar": "👨‍🔧"
    },
    {
      "id": "6",
      "name": "มาลี ยิ้มแย้ม",
      "position": "เจ้าหน้าที่",
      "avatar": "👩‍🔧"
    }
  ],
  "locations": [
    {
      "id": "8140",
      "name": "จุดที่ 1",
      "lat": 13.765141252643984,
      "lng": 100.50659894943239,
      "maxCapacity": 5
    },
    {
      "id": "952f",
      "name": "จุดที่ 2",
      "lat": 13.762937265148677,
      "lng": 100.50640046596529,
      "maxCapacity": 5
    }
  ],
  "locationPersonnel": [
    {
      "id": "72e8",
      "locationId": "952f",
      "personId": "2"
    }
  ]
}

- and Config package.json

  "scripts": {
    "dev": "vite",
    "kaika": "json-server --watch db.json",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },

  3. npm install zustand

  4. npm install axios