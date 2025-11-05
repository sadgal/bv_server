// src1/server.ts
import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api.routes';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
//const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'AI Platform Backend – Ready!' });
});


//const host = '192.168.1.22';
const host = '0.0.0.0';
if (typeof PORT === "number") {
    app.listen(PORT, host, () => {
        console.log(`Le serveur ${host} écoute sur le port ${PORT}`);
        console.log(`Le serveur est accessible depuis l'adresse IP externe.`);
    });
}

/**
 app.listen(PORT, () => {
 console.log(`✅ Backend démarré sur http://localhost:${PORT}`);
 console.log(`🧠 Assurez-vous qu’Ollama tourne sur http://localhost:11434`);

 });
 **/