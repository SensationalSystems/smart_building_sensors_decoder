/* 
 * Decoder function for The Things Network to unpack the payload of the Smart Building Sensors
 *
 * This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
 */

function Decoder(bytes, port) {

    var params = {
        "bytes": bytes
    };

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
    
    return params;
}
