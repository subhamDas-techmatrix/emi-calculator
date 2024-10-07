import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Images} from '../utils/Images';
import {TLandingProps} from '../utils/Types';
import NavButton from '../components/NavButton';
import {ScreenNames} from '../utils/ScreenNames';
import {ScrollView} from 'react-native-gesture-handler';

const Landing = ({navigation}: TLandingProps) => {
  return (
    <ImageBackground className="flex-1 min-h-screen" source={Images.LANDING}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-col items-center justify-between min-h-screen">
          <View className="flex items-center justify-center">
            <Image source={Images.LOGO} width={100} height={100} />
          </View>

          <View className="flex px-6 py-12 gap-y-10 w-full">
            <View className="flex gap-y-2">
              <Text className="text-neutral font-bold text-4xl">QuickEMI</Text>
              <Text className="text-neutral">
                Instantly calculate your loan EMIs with ease and precision
              </Text>
            </View>

            <View className="flex w-full mb-5">
              <NavButton
                navigation={navigation}
                screen={ScreenNames.LOGIN}
                text="Log in"
                btnStyle="bg-neutral border-neutral mb-5"
                textStyle="text-primary"
              />

              <NavButton
                navigation={navigation}
                screen={ScreenNames.LOGIN}
                text="Sign up"
                btnStyle="border-neutral"
                textStyle="text-neutral"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Landing;
