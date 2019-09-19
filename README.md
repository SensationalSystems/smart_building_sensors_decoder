# The Things Network decoder function for Smart Building Sensors Decoders

We sell the sensors online, here:
 * https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-door-window-eu868.html
 * https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-motion-sensor-eu868.html
 * https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-temperature-humidity-eu868.html

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit sends a well documented payload that these decoders should handle. The devices also all use different LoRaWAN ports, so a combined decoder is included to handle them all in one function.

This code is MIT licenced, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!
