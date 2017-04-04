/**
 * Created by Oleksandr Tserkovnyi on 4/4/17.
 * kemperomg@gmail.com
 */

onmessage = e => {
  console.log('Message received from main script');
  const workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
};
