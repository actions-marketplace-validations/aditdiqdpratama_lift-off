const core = require('@actions/core');
const { Headers } = require('node-fetch');
const fetch = require('node-fetch');

try {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    // `token` input defined in action metadata file
    myHeaders.append("Authorization", `Bearer ${core.getInput('token')}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "content": {
            "className": "ChatMessage.Text",
            // `message` input defined in action metadata file
            "text": core.getInput('message'),
        },
        // `channel` input defined in action metadata file
        "channel": core.getInput('channel')
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    // `base-url` input defined in action metadata file
    fetch(`https://${core.getInput('base-url')}/api/http/chats/messages/send-message`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result));

} catch (error) {
    core.setFailed(error.message);
}

// `time` output defined in action metadata file
const time = (new Date()).toTimeString();
core.setOutput("time", time);
