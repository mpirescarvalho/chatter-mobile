import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused } from '@react-navigation/native';

import { Container, List, Avatar, Name, Person } from './styles';

const People = ({ route, navigation, stackNavigation }) => {
  const isFocused = useIsFocused();

  const { peopleColors, room } = route.params;

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
    <Container>
      <List
        data={room.people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Person>
            <Avatar
              source={{
                uri: `https://api.adorable.io/avatar/50/${item.id}.png`,
              }}
            />
            <Name color={peopleColors[item.id]}>Marcelo Carvalho</Name>
          </Person>
        )}
      />
    </Container>
  );
};

export default People;
