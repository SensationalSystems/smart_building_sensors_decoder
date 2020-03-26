/* 
 * Decoder function for The Things Network to unpack the payload of the Smart Building Sensors
 *
 * This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
 */

function Decoder(bytes, port) {

    var params = {
        "bytes": bytes
    };
    
    if (port === 103) {
        // Healthy Home Sensor
        // VOC Measurement
        voc = (bytes[7] << 8) | bytes[6];
        if (voc === 65535) {
            voc_error = true;
        } else {
            voc_error = false;
        }

        // CO2 Measurement
        co2 = (bytes[5] << 8) | bytes[4];
        if (co2 === 65535) {
            co2_error = true;
        } else {
            co2_error = false;
        }

        // IAQ Measurement
        iaq = (bytes[9] << 9) | bytes[8];

        // Humidity Measurement
        rh = bytes[3] &= 0x7f;
        if (rh === 127) {
            rh_error = true;
        } else {
            rh_error = false;
        }

        // Board temp measurement
        temp_board = bytes[2] & 0x7f;
        temp_board = temp_board - 32;

        // Ambient temp measurement
        temp_ambient = bytes[10] & 0x7f;
        temp_ambient = temp_ambient - 32;

        // Battery measurements
        batt = bytes[1] & 0x0f;
        batt = (25 + batt) / 10;

        params.voc = voc;
        params.voc_error = voc_error;
        params.co2 = co2;
        params.co2_error = co2_error;
        params.iaq = iaq;
        params.rh = rh;
        params.rh_error = rh_error;
        params.temp_board = temp_board;
        params.temp_ambient = temp_ambient;
        params.batt = batt;

    } else if (port === 100) {
        // Door Sensor
        // Temp measurement
        temp = bytes[2] & 0x7f;
        temp = temp - 32;
    
        // Battery measurements
        batt = bytes[1] & 0x0f;
        cap = bytes[1] >> 4;
    
        batt = (25 + batt) / 10;
        cap = (cap / 15) * 100;
    
        // Time measurement
        time = (bytes[4] << 8) | bytes[3];
    
        // Count measurement
        count = ((bytes[7] << 16) | (bytes[6] << 8)) | bytes[5];
    
        // Status measurement
        status = bytes[0] & 0x1;
        if (status === 1) {
            open = true;
        } else {
            open = false;
        }
    
        params.temp = temp;
        params.batt = batt;
        params.cap = cap;
        params.time = time;
        params.count = count;
        params.open = open;
        params.port = port;
    } else if (port === 102) {
        // PIR Sensor
        // Temp measurement
        temp = bytes[2] & 0x7f;
        temp = temp - 32;
    
        // Battery measurements
        batt = bytes[1] & 0x0f;
        cap = bytes[1] >> 4;
    
        batt = (25 + batt) / 10;
        cap = (cap / 15) * 100;
    
        // Time measurement
        time = (bytes[4] << 8) | bytes[3];
    
        // Count measurement
        count = ((bytes[7] << 16) | (bytes[6] << 8)) | bytes[5];
    
        // Status measurement
        status = bytes[0] & 0x1;
        if (status === 1) {
            occupied = true;
        } else {
            occupied = false;
        }
    
        params.temp = temp;
        params.batt = batt;
        params.cap = cap;
        params.time = time;
        params.count = count;
        params.occupied = occupied;
        params.port = port;
    }

    return params;
}
