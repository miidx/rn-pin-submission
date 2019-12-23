import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import moment from 'moment-timezone';
import ButtonText from '@miidx/rn-text-button';
import PinInput from '@miidx/rn-pin-input';
import Countdown from '@miidx/rn-count-down';
import Button from './button';

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    marginBottom: -40,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    borderRadius: 5,
    width: 310,
    marginTop: -10,
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: -10,
  },
  resendButton: { 
    alignSelf: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
};

const utcNow = moment().format();

const renderResendButton = (
  resending, loading, onResendOtp, canResendOtpAt,
  onTimeIsUp,
) => {
  if (resending) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator color='#FFAC1F' />
      </View>
    );
  }
  if (canResendOtpAt === utcNow || canResendOtpAt === '') {
    return (
      <View>
        <ButtonText
          caption="Resend OTP"
          onPress={onResendOtp}
          style={styles.resendButton}
          disabled={loading}
        />
      </View>
    );
  }

  return (
    <Countdown
      label="You can resend OTP after"
      endTime={canResendOtpAt}
      onTimeIsUp={() => { onTimeIsUp(); }}
    />
  );
};

const PinSubmission = ({
  onSubmit, phoneNumber, loading, onResendOtp, resending,
  canResendOtpAt, onTimeIsUp, pinExpirationDate, onPinExpired, 
}) => {
  const [currValue, setCurrValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          {'Enter PIN that we have sent\nto your mobile phone'}
        </Text>

        <Text style={styles.phoneNumber}>
          {phoneNumber}
        </Text>
      </View>

      <PinInput
        value={currValue}
        onTextChanged={input => setCurrValue(input)}
        pinExpirationDate={pinExpirationDate}
        onPinExpired={onPinExpired}
      />

      <Button
        caption="Submit"
        containerStyle={styles.submitButton}
        onPress={() => onSubmit(currValue)}
        disabled={resending}
        loading={loading}
      />

      <Text style={styles.resendText}>
        {"Haven\'t got the OTP code yet?"}
      </Text>

      {renderResendButton(
        resending, loading, onResendOtp, canResendOtpAt,
        onTimeIsUp,
      )}
    </View>
  );
};

export default PinSubmission;

PinSubmission.propTypes = {
  loading: PropTypes.bool.isRequired,
  resending: PropTypes.bool.isRequired,
  onPinExpired: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired.isRequired,
  onResendOtp: PropTypes.func.isRequired,
  onTimeIsUp: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  canResendOtpAt: PropTypes.string.isRequired,
  pinExpirationDate: PropTypes.string.isRequired,
};
