/**
 * Created by Oleksandr Tserkovnyi on 4/4/17.
 * kemperomg@gmail.com
 */

import TheWorker from './worker';

var input = document.createElement('input');
input.type = 'number';
document.body.appendChild(input);
var input2 = document.createElement('input');
document.body.appendChild(input2);
input2.type = 'number';
var result = document.createElement('div');
document.body.appendChild(result);

if (window.Worker) { // Check if Browser supports the Worker api.
                     // Requires script name as input
  var myWorker = new TheWorker;

// onkeyup could be used instead of onchange if you wanted to update the answer every time
// an entered value is changed, and you don't want to have to unfocus the field to update its .value

  input.onchange = function() {
    myWorker.postMessage([input.value, input2.value]); // Sending message as an array to the worker
    console.log('Message posted to worker');
  };

  input2.onchange = function() {
    myWorker.postMessage([input.value, input2.value]);
    console.log('Message posted to worker');
  };

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  };
}