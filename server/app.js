const express = require("express");
const cors = require("cors"); // cors 처리
const app = express();
const port = 4000;

// cors
app.use(cors());

app.get("/events", (req, res) => {
  // 이벤트 데이터
  const events = [
    {
      title: "A",
      start: "2020-12-05T09:00:00", // 시간까지 표시하려면 이렇게 표현!
      end: "2020-12-05T18:00:00",
    },
    {
      title: "B",
      start: "2020-12-12T09:00:00",
      end: "2020-12-12T18:00:00",
    },
    {
      title: "C",
      start: "2020-12-19T07:00:00",
      end: "2020-12-19T15:00:00",
    },
    {
      title: "D",
      start: "2020-12-26",
      end: "2020-12-26",
    },
  ];

  res.json(events);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
