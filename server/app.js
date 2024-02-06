import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

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

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});