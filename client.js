import { CallClient, CallAgent } from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
let call;
let callAgent;
const calleePhoneInput = document.getElementById("callee-phone-input");
const callPhoneButton = document.getElementById("call-phone-button");
const hangUpPhoneButton = document.getElementById("hang-up-phone-button");
const mutePhoneButton = document.getElementById("mute-phone-button");
const unmutePhoneButton = document.getElementById("unmute-phone-button");
const holdPhoneButton = document.getElementById ("hold-phone-button");
const resumePhoneButton = document.getElementById ("resume-phone-button");
const addParticipantButton = document.getElementById ("addParticipant-phone-button");

//update
async function init() {
    const callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential('eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwNCIsIng1dCI6IlJDM0NPdTV6UENIWlVKaVBlclM0SUl4Szh3ZyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOjQ5NmJlYzdhLWI0M2YtNGUwMS05NzdjLWI3NmNhMGY3N2I2Y18wMDAwMDAxMC1hODdkLTFlZjItN2M0YS1hZDNhMGQwMDRjYTkiLCJzY3AiOjE3OTIsImNzaSI6IjE2NDk0MTE4NDgiLCJleHAiOjE2NDk0OTgyNDgsImFjc1Njb3BlIjoidm9pcCIsInJlc291cmNlSWQiOiI0OTZiZWM3YS1iNDNmLTRlMDEtOTc3Yy1iNzZjYTBmNzdiNmMiLCJpYXQiOjE2NDk0MTE4NDh9.lTPEioV3zykVoNvro0NcYoh-PYRrPLoHIilZFQM5ribWr2642wFt3N2baXH6w5nmGWnktgc-dykxskBAf16YvxAh6bdFrZBf3KSck580rtKKHgSHU7yaNvj8v106-k1GsTs05q979EJigg8axddZCwxlyo-SU4fK9qjen8NnHkL61FpRswMCvqcM_eEizHyxIgBnY-isYf1W3Qic391RmA_069JGJq21ILfGwz351iTXQh_sKJ-9IlJBrPe_TwPpEZKoQZcZ5R4C19Yl8UXlsK8ERY8eWSWOao3OmIAZK7vOrUBw2jrCvMTRYYOF5Kdi5WqG3T1x_P32xMx6ZL62JQ');
    callAgent = await callClient.createCallAgent(tokenCredential);
  //  callPhoneButton.disabled = false;
}
init();
callPhoneButton.addEventListener("click", () => {
  // start a call to phone
  const phoneToCall = calleePhoneInput.value;
  call = callAgent.startCall(
    [{phoneNumber: phoneToCall}], { alternateCallerId: {phoneNumber: '+48123123123'}
  });
  // toggle button states
  hangUpPhoneButton.disabled = false;
  callPhoneButton.disabled = true;
  mutePhoneButton.disabled = false;
  unmutePhoneButton.disabled = true;
  holdPhoneButton.disabled = false;
  resumePhoneButton.disabled = true;
  addParticipantButton.disabled = false;
});
/*
//Add participant
addParticipantButton.addEventListener("click", () => {
    
  // start a call to phone
  const addParticipantButton = calleePhoneInput.value;
  call = callAgent.addParticipant(
    [{phoneNumber: phoneToCall}], { alternateCallerId: {phoneNumber: '+48123123123'}
  });
  // toggle button states
  hangUpPhoneButton.disabled = false;
  callPhoneButton.disabled = true;
  
});
*/
hangUpPhoneButton.addEventListener("click", () => {
  // end the current call
  call.hangUp({
    forEveryone: true
  });
  // toggle button states
  hangUpPhoneButton.disabled = true;
  callPhoneButton.disabled = false;
});

//------------MUTE ----------------------------------------------------------
mutePhoneButton.addEventListener("click", () => {
  callAgent = call.mute();
  
  // Zarządzaj przyciskami 
  hangUpPhoneButton.disabled = false;  // Po kliknięciu przycisku "mute", przycisk "hangUP" będzie aktywny
  callPhoneButton.disabled = true;
  mutePhoneButton.disabled = true;
  unmutePhoneButton.disabled = false;
});
//------------UNMUTE ----------------------------------------------------------
unmutePhoneButton.addEventListener("click", () => {
  callAgent = call.unmute();
  
  // Zarządzaj przyciskami 
  hangUpPhoneButton.disabled = false;  // Po kliknięciu przycisku "mute", przycisk "hangUP" będzie aktywny
  callPhoneButton.disabled = true;
  mutePhoneButton.disabled = false;
  unmutePhoneButton.disabled = true;
})
holdPhoneButton.addEventListener("click", () => {
  callAgent = call.hold();
  // Zarządzaj przyciskami 
  hangUpPhoneButton.disabled = false;  
  callPhoneButton.disabled = true;
  holdPhoneButton.disabled = true;
  resumePhoneButton.disabled = false;
})

resumePhoneButton.addEventListener("click", () => {
  callAgent = call.resume();
  // Zarządzaj przyciskami 
  hangUpPhoneButton.disabled = false;  
  callPhoneButton.disabled = true;
  holdPhoneButton.disabled = false;
  resumePhoneButton.disabled = true;
})
