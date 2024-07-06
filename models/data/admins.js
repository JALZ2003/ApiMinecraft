import "dotenv/config.js";
import "../../config/connectionDb.js";
import bcryptjs from "bcryptjs";
import Admin from "../Admin.js";


const admins = [
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "password": "hola12345",
        "confirmPassword": "hola12345",
        "role": "2",
        "active": "false"
    },
    {
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "password": "hola12345",
        "confirmPassword": "hola12345",
        "role": "2",
        "active": "false"
    },
    {
        "name": "Mike Johnson",
        "email": "mikejohnson@example.com",
        "password": "hola12345",
        "confirmPassword": "hola12345",
        "role": "2",
        "active": "false"
    },
    {
        "name": "Sarah Davis",
        "email": "sarahdavis@example.com",
        "password": "hola12345",
        "confirmPassword": "hola12345",
        "role": "2",
        "active": "false"
    },
    {
        "name": "Robert Wilson",
        "email": "robertwilson@example.com",
        "password": "hola12345",
        "confirmPassword": "hola12345",
        "role": "2",
        "active": "false"
    }
]

const insertAdmins = async () => {
    try {
        for (const admin of admins) {
            admin.password = bcryptjs.hashSync(admin.password, 10);
            admin.confirmPassword = bcryptjs.hashSync(admin.confirmPassword, 10);
            console.log('[SYSTEM]: Creating Admin in Process...');
            const created = await Admin.create(admin);
            console.log("[SYSTEM]: Admin Created Successfully...");
            console.log("[SYSTEM]: ADMIN ->", created.name, "ID ->", created._id);
        }
    } catch (error) {
        console.log(`[SYSTEM ERROR]: ${error}`)
    }
}

insertAdmins();