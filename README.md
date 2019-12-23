# rn-pin-submission
A React Native pin-submission component. This component will show 6 pin-input field complete with count down timer and send OTP handler.

![](pin-submission.gif)

## Usage

```jsx
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
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 canResendOtpAt        | Time value to send new OTP code. Time value should be in complete ISO-8601 date time format `YYYY-MM-DDTHH:mmZ`. `YYYY` is 4 digit year, `MM` is month number, `DD` is day of month, `HH` is hours in 24 hour time, `mm` is minutes, and `Z` is offset from UTC time, such as `+-HH:mm`. Adding seconds `s` and fractional seconds `SS` are optional                   | string   | yes       |           
 loading       | Status of submitting OTP code                 | boolean  | yes          |           
 onPinExpired        | Callback called when pin has expired      | function | yes       |           
 onResendOtp           | Callback called when resending OTP code                          | function  | yes          |           
 onSubmit         | Callback called when submitting OTP code                        | function  | yes          |           
 onTimeIsUp          | Callback called when pin has expired                  | function   | yes          |           
 phoneNumber  | Phone number which will receive OTP code    | string   | yes          |         
 pinExpirationDate  | Expiring pin time value in complete ISO-8601 date time format `YYYY-MM-DDTHH:mmZ`. `YYYY` is 4 digit year, `MM` is month number, `DD` is day of month, `HH` is hours in 24 hour time, `mm` is minutes, and `Z` is offset from UTC time, such as `+-HH:mm`. Adding seconds `s` and fractional seconds `SS` are optional    | string   | yes          |         
 resending  | Status of resending OTP code    | boolean   | yes          |         


```


```


### Note:
* This package use `rn-count-down` component for its count down timer. [Click here](https://github.com/miidx/rn-count-down "rn-count-down") to read the documentation.
* This package also use `rn-pin-input` component for its pin-input field. [Click here](https://github.com/miidx/rn-pin-input "rn-pin-input") to read the documentation.