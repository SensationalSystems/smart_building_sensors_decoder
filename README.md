# The Things Network decoder functions for Smart Building Sensors

We sell a range of low-cost LoRaWAN sensors designed for homes and offices. The range includes Door & Window detectors, Temperature & Relative Humidity sensors and PIR motion detectors. This repo has individual decoders for the sensors, and a combined decoder that can handle all in one application.

You can find the sensors here:
 * Temperature & humidity [EU868 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-temperature-humidity-eu868.html), [US915 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-temperature-humidity-us915.html)
 * Door & Window [EU868 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-door-window-eu868.html), [US915 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-door-window-us915.html)
  * PIR Motion [EU868 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-motion-sensor-eu868.html), [US915 version](https://connectedthings.store/gb/home-and-office-sensors/smart-building-sensors-motion-sensor-us915.html)

To use this:
* create a TTN application and register your devices using the TTN console
* in your application, choose "Payload Formats" from the navigation
* paste the decoder function into the textarea

The unit send well documented payloads that these decoders should handle. The devices also all use different LoRaWAN ports, so a combined decoder is included to handle them all in one function.

This code is MIT licenced, and it works fine in our testing. We don't claim it to be excellent, pull requests are encouraged!
