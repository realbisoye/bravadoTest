import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

interface PersonAvatarProps {
  uri: string
}

const PersonAvatar = ({uri}: PersonAvatarProps) => {
  const styles = StyleSheet.create({
    avatar: {
      borderRadius: 8,
      backgroundColor: '#e0e0e0',
      height: 80,
      width: 80,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    image: {
      height: 80,
      width: 80,
    },
  });

  return (
    <View style={styles.avatar}>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
};

export default PersonAvatar;
