import React from 'react';
import {
  TouchableOpacity, Text, View, ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    backgroundColor: '#FFAC1F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 25,
  },
  disabled: {
    backgroundColor: '#A4A4A4',
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const enabledButton = (caption, containerStyle, textStyle, onPress) => (
  <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
    <Text style={[styles.textStyle, textStyle]}>
      {caption}
    </Text>
  </TouchableOpacity>
);

const disabledButton = (caption, containerStyle, textStyle) => (
  <View style={[styles.container, styles.disabled, containerStyle]}>
    <Text style={[styles.textStyle, textStyle]}>
      {caption}
    </Text>
  </View>
);

const loadingButton = containerStyle => (
  <View style={[styles.container, { backgroundColor: undefined }, containerStyle]}>
    <ActivityIndicator size="large" color='#FFAC1F' />
  </View>
);

const Button = ({
  disabled, loading, caption, containerStyle, textStyle, onPress,
}) => {
  if (loading) {
    return loadingButton(containerStyle);
  } if (disabled) {
    return disabledButton(caption, containerStyle, textStyle);
  }
  return enabledButton(caption, containerStyle, textStyle, onPress);
};

const StyleShape = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  containerStyle: StyleShape,
  textStyle: StyleShape,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  containerStyle: {},
  textStyle: {},
};

export default Button;
