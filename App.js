import React, { Component } from 'react';
import { View } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.apiKey = '46087002';
    this.sessionId = '2_MX40NjA4NzAwMn5-MTUyMTkzNDc4ODMxOX5ZTEo0STY4Z2E1Y0JRSGM3S3NORGNSb1d-fg';
    this.token = 'T1==cGFydG5lcl9pZD00NjA4NzAwMiZzaWc9NzI5MzYxNzRlZWUxZjNiMWUyN2NkMGJlZTVlMzgxNjk2MTlkNGJjYjpzZXNzaW9uX2lkPTJfTVg0ME5qQTROekF3TW41LU1UVXlNVGt6TkRjNE9ETXhPWDVaVEVvMFNUWTRaMkUxWTBKUlNHTTNTM05PUkdOU2IxZC1mZyZjcmVhdGVfdGltZT0xNTIxOTM0ODE3Jm5vbmNlPTAuMjI3NzQ2NDY5NDk3NDM0Mjcmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyNDUyNjgxNyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
}
