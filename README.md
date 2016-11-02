# express-slack-events-listener
Express Middleware which emits all events received from Slack Events API. It handles the intial verification with Slack and calls your callback with all events received from Slack.

## How To
`npm install express-slack-events-listener`

Initialize the middleware with your Slack verification token and your event handling callback.

`app.use` defines which path you will listen for Slack events at.

```javascript
var slackEvents = require('express-slack-events-listener')('<verificationToken>', onSlackEvent);

function onSlackEvent(event) { … }

app.use('/slack_events', slackEvents);
```

## Parameters:

- `verificationToken` *required* *Find this variable in your Slack application settings - if set to false will skip verification (for quick testing)*
- `onSlackEvent` *required* *Every time we receive an event from Slack this function will be called with the event payload*

## Payload format
List of payloads is available at https://api.slack.com/events-api#event_types

