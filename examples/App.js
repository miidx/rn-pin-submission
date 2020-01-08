/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import PinSubmission from '@miidx/rn-pin-submission';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <PinSubmission
        onSubmit={pin => { console.log(username, pin); }}
        onResendOtp={() => { console.log('Resend OTP!'); }}
        onPinExpired={() => { console.log('Pin has expired!'); }}
        phoneNumber="08123456789"
        loading={false}
        resending={false}
        onTimeIsUp={() => { console.log('Time is up!'); }}
        canResendOtpAt="2019-12-19T17:35+07:00"
        pinExpirationDate="2019-12-19T17:30+07:00"
      />
      </SafeAreaView>
    </>
  );
};

export default App;
