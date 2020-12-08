const express = require("express");
const cors = require("cors"); // cors 처리
const app = express();
const port = 3000;

// cors
app.use(cors());

app.get("/events", (req, res) => {
  // 이벤트 데이터
  const events = [
    {
      title: "Event 1",
      start: "2020-12-05T09:00:00", // 시간까지 표시하려면 이렇게 표현!
      end: "2020-12-05T18:00:00",
    },
    {
      title: "Event 1",
      start: "2020-12-08T09:00:00",
      end: "2020-12-08T18:00:00",
    },
    {
      title: "Event 1",
      start: "2020-12-09T07:00:00",
      end: "2020-12-09T15:00:00",
    },
    {
      title: "Event 2",
      start: "2020-12-08",
      end: "2020-12-10",
    },
  ];

  res.json(events);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
