import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';

// import { Container } from './styles';

const People = ({ navigation, stackNavigation }) => {
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    if (stackNavigation && isFocused) {
      stackNavigation.setOptions({
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Messages')}
            style={{ marginRight: 16 }}
          >
            <Icon name="chat" color="#000" size={24} />
          </TouchableOpacity>
        ),
      });
    }
  }, [stackNavigation, isFocused]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>People here</Text>
    </View>
  );
};

export default People;
