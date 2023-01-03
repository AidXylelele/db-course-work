const express = require("express");
const Controllers = require("./controllers");
const app = express();
const jsonParse = express.json();

app.get("/survey/question/:id", Controllers.getQuestion);

app.get("/survey/questions/", Controllers.getQuestions);

app.post("/survey/question/", jsonParse, Controllers.createQuestion);

app.delete("/survey/question/:id", Controllers.deleteQuestion);

app.put("/survey/question/:id", jsonParse, Controllers.updateQuestion);

app.listen(2222);
