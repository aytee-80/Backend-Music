import app from "./src/app";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server running on port 3000`); 
});