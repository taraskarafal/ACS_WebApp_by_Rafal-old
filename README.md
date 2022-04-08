# ACS_WebApp_by_Rafal

Before running sample code
Pass the User Access Token with VOIP scope type in Client.js file at line no 13 const tokenCredential = new AzureCommunicationTokenCredential('<USER ACCESS TOKEN with PSTN scope>');.
With the Call enabled telephone number procured in pre-requisites, add it to the Client.js file. Assign your ACS telephone number at line no 24 call = callAgent.startCall([{phoneNumber: phoneToCall}], { alternateCallerId: {phoneNumber: 'ACS Number'}});.

  Run the code
Run npm i on the directory of the project to install dependencies

Use the webpack-dev-server to build and run your app. Run the following command to bundle application host in on a local webserver:

 npx webpack-dev-server --entry ./client.js --output bundle.js --debug --devtool inline-source-map
  
Open your browser and navigate to http://localhost:8080/. You should see the following:
