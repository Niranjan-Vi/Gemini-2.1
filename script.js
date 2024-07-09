import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyACsupPzb4SFfD1HoGXxqVFwEXQua2_Rww");
let request=document.getElementById('model');
let text=document.getElementById('text');
let button=document.getElementById('button');
let input1='';
let querries=[];

button.addEventListener('click',()=>{
     input1=text.value;
    querries.push(input1);



    console.log(querries);
    run(request);
});

async function run(request) {
  // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: querries[querries.length-1] }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

   

  const result = await chat.sendMessage(input1);
  const response = await result.response;
 let data = response.text();
 console.log(data);
 request.value=data;
    
}



