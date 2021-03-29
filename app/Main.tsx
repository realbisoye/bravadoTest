import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Image, TextInput} from 'react-native';
import Card, {Person} from './Card';
import {search, debounce, data} from './utils'

const MainPage = () => {
  const [people, setPeople] = useState<Person[]>(data);
  const [searchText, setSearchText] = useState<string[] | undefined>(undefined);

  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: 'transparent',
    },

    searchWrapper: {
      justifyContent: 'center',
    },
    search: {
      height: 35,
      borderRadius: 4,
      borderColor: '#ededed',
      paddingLeft: 30,
      borderWidth: 1,
      marginVertical: 12,
      backgroundColor: '#ffffff',
      width: '94%',
      alignSelf: 'center',
    },
    searchIcon: {
      position: 'absolute',
      left: 10,
      marginLeft: 10,
      height: 15,
      width: 15,
    },
  });

  const itemKeyExtractor = (item: Person, index: number) => item.name + index;

  const renderItem = ({item}: {item: Person}) => {
    const searchTerms = searchText ? searchText : []
    return (
      <Card person={item} highlighted={searchTerms} />
    )
  };

  const onSearch = debounce((text: string) => {
    if (text) {
      const textArray = text.split(' ')
      const newData = search(textArray);
      setPeople(newData);
      setSearchText(textArray);
    } else {
      setPeople(data);
      setSearchText(undefined);
    }
  });

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.search}
          onChangeText={onSearch}
        />
        <Image source={{uri: 'https://img.icons8.com/search'}} style={styles.searchIcon}/>
      </View>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={itemKeyExtractor}
      />
    </View>
  );
};

export default MainPage;
