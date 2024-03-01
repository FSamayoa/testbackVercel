const admin = require("firebase-admin");

require("dotenv").config();

var serviceAccount = require("../fireback-111-firebase-adminsdk-190pm-51d865ee7e.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DB_URL,
});

const db = admin.database();

const obtenerContactos = async (req, res) => {
    try {
        const snapshot = await db.ref('contactos').once('value');
        const data = snapshot.val();
        res.json(data);
    } catch (error) {
        console.error("Error al obtener datos:", error);
        res.status(500).json({ error: "Error al obtener datos de la base de datos" });
    }
};

module.exports = { obtenerContactos };