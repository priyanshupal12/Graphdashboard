import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userrouter from "./routes/auth.js";
import tokenrouter from "./routes/tokens.js";

dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 8000;

// ✅ Dynamic CORS config with console.log
const allowedOrigins = [
    'http://localhost:5173'
    // Add more allowed origins here if needed
];

const corsOptions = {
    origin: function (requestOrigin, decideingFn) {
        console.log('Incoming request Origin:', requestOrigin);

        if (!requestOrigin) {
            console.log('No Origin header → allowing request (likely Postman or server-to-server)');
            return decideingFn(null, true);
        }

        if (allowedOrigins.includes(requestOrigin)) {
            console.log(`Origin allowed: ${requestOrigin}`);
            decideingFn(null, true);
        } else {
            console.log(`Origin NOT allowed: ${requestOrigin}`);
            decideingFn(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/register', userrouter);
app.use('/login', userrouter);
app.use('/tokens', tokenrouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
