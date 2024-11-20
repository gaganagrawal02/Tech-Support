const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Configuration
let salt_key = "438a3894-c368-446e-8089-abcc165c6735";
let merchant_id = "M228PH7O0XJHO";


// Check if server is running
app.get("/", (req, res) => {
    
    res.send("Server is running");
});

// Payment Route
app.post("/payment", async (req, res) => {
    try {
        const merchantTransactionId = req.body.transactionId;
        const data = {
            merchantId: merchant_id,
            merchantTransactionId: merchantTransactionId,
            merchantUserId: req.body.MUID,
            name: req.body.name,
            amount: req.body.amount * 100,  // Convert to paise
            redirectUrl: `http://localhost:8000/status/?id=${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.number,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' +'438a3894-c368-446e-8089-abcc165c6735';
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        // Log all the necessary details for debugging
        console.log("Payload:", payloadMain);
        console.log("Checksum:", checksum);
        console.log("Sending request to PhonePe API...");

        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        const response = await axios.request(options);
        console.log("Response from PhonePe:", response.data);

        return res.json(response.data);

    } catch (error) {
        console.error("Error in Payment API:", error.message);
        res.status(500).json({ message: error.message, success: false });
    }
});

// Server Listening on Specific Port
app.listen(8000, () => {
    console.log(`Server is running on port 8000`);
    console.log("Salt Key:", salt_key);
console.log("Merchant ID:", merchant_id);

});
