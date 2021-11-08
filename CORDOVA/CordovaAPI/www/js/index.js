/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


window.onload =  function() {
    console.log("aqui");
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    document.addEventListener("backbutton", onBack, false);
    document.addEventListener("volumeupbutton", onVolUp, false);
    document.addEventListener("volumedownbutton", onVolDown, false);
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    var element = document.getElementById("log");
    element.innerHTML += "- API de Cordova cargada.<br/>";

    var dispositivo = document.getElementById("dispositivo");
    dispositivo.innerHTML += "<ul>";
    dispositivo.innerHTML += "<li> PhoneGap version =" + device.cordova + "</li>";
    dispositivo.innerHTML += "<li> Modelo =" + device.model + "</li>";
    dispositivo.innerHTML += "<li> Plataforma =" + device.platform + "</li>";
    dispositivo.innerHTML += "<li> UUDI =" + device.uuid + "</li>";
    dispositivo.innerHTML += "<li> Version =" + device.version + "</li>";
    checkConnection();
    navigator.compass.getCurrentHeading(onSuccess, onError);
    navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
    navigator.geolocation.getCurrentPosition(geolocationSuccess);
    dispositivo.innerHTML += "</ul>";

}

function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Conexión desconocida';
    states[Connection.ETHERNET] = 'Ethernet';
    states[Connection.WIFI] = 'WiFi';
    states[Connection.CELL_2G] = 'Cell 2G';
    states[Connection.CELL_3G] = 'Cell 3G';
    states[Connection.CELL_4G] = 'Cell 4G';
    states[Connection.CELL] = 'Cell generic';
    states[Connection.NONE] = 'Sin conexión';

    var dispositivo = document.getElementById("dispositivo");
    dispositivo.innerHTML += "<li> Tipo de conexión =" + states[networkState] + "</li>";
}
   

function onPause() {
    var element = document.getElementById("log");
    element.innerHTML += "- Evento Pause.<br/>";
}
function onResume() {
    var element = document.getElementById("log");
    element.innerHTML += "- Evento Resume.<br/>";
}

function onBack() {
    var element = document.getElementById("log");
    element.innerHTML += "- Evento BackButton.<br/>";
}

function onVolUp() {  
    var element = document.getElementById("log");
    element.innerHTML += "- Evento VolumeUp.<br/>";
}

function onVolDown() {
    var element = document.getElementById("log");
    element.innerHTML += "- Evento VolumeDown.<br/>";
}

function onSuccess(heading) {
    var dispositivo = document.getElementById("dispositivo");
    dispositivo.innerHTML += "<li> Tipo de conexión =" + heading.magneticHeading + "º </li>";
};
function onError(error) {
 alert('Compass Error: ' + error.code);
};

function accelerometerSuccess(acceleration) {
    var dispositivo = document.getElementById("dispositivo");
    dispositivo.innerHTML += "<li> Aceleración X =" + acceleration.x + "</li>";
    dispositivo.innerHTML += "<li> Aceleración X =" + acceleration.y + "</li>";
    dispositivo.innerHTML += "<li> Aceleración X =" + acceleration.z + "</li>";
}

function accelerometerError() {
    alert('onError!');
}

function geolocationSuccess(position) {
    var dispositivo = document.getElementById("dispositivo");
    dispositivo.innerHTML +="<li> Latitude = " + position.coords.latitude  +  "</li>";
    dispositivo.innerHTML +="<li> Longitude =" + position.coords.longitude +  "</li>";
    dispositivo.innerHTML +="<li> Altitude = " + position.coords.altitude  +  "</li>";
    dispositivo.innerHTML +="<li> Accuracy = " + position.coords.accuracy  +  "</li>";
    dispositivo.innerHTML +="<li> Altitude Accuracy= " + position.coords.altitudeAccuracy +  "</li>";
    dispositivo.innerHTML +="<li> Heading = " + position.coords.heading  +  "</li>";
    dispositivo.innerHTML +="<li> Speed = " + position.coords.speed +  "</li>";
    dispositivo.innerHTML +="<li> Timestamp = " + position.timestamp +  "</li>";
};