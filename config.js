const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~kQhUkK6L#VemJnPNM1Vl8GXtkCTq-kyptvPMT5C_lo6jfDTHeRE0'
};
