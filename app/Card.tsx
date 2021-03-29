import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from './Avatar';
import HighlightText from 'react-native-highlight-words';



export interface Person {
  name: string
  title: string
  email: string
  address: string
  city: string
  avatar: string
}

interface PersonCardProps  {
 person: Person
 highlighted: string[]
}

const PersonCard = ({person, highlighted}: PersonCardProps) => {
  const {avatar, name, email, title, address, city} = person;

  const styles = StyleSheet.create({
    wrapper: {
      borderRadius: 8,
      borderColor: '#ededed',
      borderWidth: 1,
      flexDirection: 'row',
      paddingHorizontal: 5,
      paddingVertical: 10,
      marginVertical: 10,
      backgroundColor: '#ffffff',
      width: '94%',
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
    details: {
      flexDirection: 'column',
      margin: 5,
      flexShrink: 1,
    },
    texts: {
      marginVertical: 3,
    },
    name: {
      marginBottom: 5,
      fontSize: 16,
      fontWeight: '600',
    },
    email: {
      fontSize: 12,
    },
    highlights: {
      backgroundColor: 'yellow',
    }
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.details}>

        <Text style={[styles.texts, styles.name]}>
          <HighlightText
            highlightStyle={styles.highlights}
            searchWords={highlighted}
            textToHighlight={name}
          />
        </Text>
        <Text style={[styles.texts, styles.email]}>
          <HighlightText
            highlightStyle={styles.highlights}
            searchWords={highlighted}
            textToHighlight={email}
          />
        </Text>
        <Text style={styles.texts}>
          <HighlightText
            highlightStyle={styles.highlights}
            searchWords={highlighted}
            textToHighlight={title}
          />
        </Text>
        <Text style={styles.texts}>
          <HighlightText
            highlightStyle={styles.highlights}
            searchWords={highlighted}
            textToHighlight={`${address}, ${city}`}
          />
        </Text>
      </View>
      <Avatar uri={avatar} />
    </View>
  );
};

export default PersonCard;
