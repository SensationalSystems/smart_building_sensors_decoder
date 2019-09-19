/* 
 * Decoder function for The Things Network to unpack the payload of the Smart Building Sensors
 *
 * This function was created by Cameron Sharp at Sensational Systems - cameron@sensational.systems
 */

function Decoder(bytes, port) {

    var params = {
        "bytes": bytes
    };
    
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

    // Humidity Measurement
    rh = bytes[3] &= 0x7f;
    if (rh === 127) {
        rh_error = true;
    } else {
        rh_error = false;
    }
    
    // Temp measurement
    temp = bytes[2] & 0x7f;
    temp = temp - 32;

    // Battery measurements
    batt = bytes[1] & 0x0f;
    cap = bytes[1] >> 4;

    batt = (25 + batt) / 10;
    cap = (cap / 15) * 100;

    params.voc = voc;
    params.voc_error = voc_error;
    params.co2 = co2;
    params.co2_error = co2_error;
    params.rh = rh;
    params.rh_error = rh_error;
    params.temp = temp;
    params.batt = batt;
    params.cap = cap;

    return params;
}
