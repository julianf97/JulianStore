import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());

app.use("/", router); 

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`);
});
