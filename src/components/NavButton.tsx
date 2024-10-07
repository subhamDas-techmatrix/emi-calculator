import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TNavButtonProps} from '../utils/Types';

const NavButton = ({
  btnStyle,
  textStyle,
  text,
  navigation,
  screen,
}: TNavButtonProps) => {
  return (
    <>
      <TouchableOpacity
        className={`rounded-md p-2 items-center justify-center text-center border ${btnStyle}`}
        onPress={() => navigation.navigate(screen)}>
        <Text className={`font-bold text-lg ${textStyle}`}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default NavButton;
