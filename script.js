import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyACsupPzb4SFfD1HoGXxqVFwEXQua2_Rww");
let request1 = document.getElementById('model');
let text = document.getElementById('text');
let button = document.getElementById('button');
let input1 = '';
let querries = [];

button.addEventListener('click', () => {
  input1 = text.value;
  querries.push(input1, '\n');

  run();
  text.value = " ";
  if(querries.length>=5){
    querries.splice(0,querries.length);
  }

});

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  let prompt = input1;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let text = response.text();
  querries.push(text);
  request1.value = querries;
  // console.log(querries);
}




