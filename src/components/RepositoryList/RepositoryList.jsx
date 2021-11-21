import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useDebounce } from 'use-debounce';
import { Picker } from 'react-native';
import theme from '../../theme';
import RepositoryListItem from './RepositoryListItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Text from '../Text';

import { useHistory } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import { setIn } from 'formik';
import { TextInput } from '../TextInput';

const styles = StyleSheet.create({
  mainBack: {
    backgroundColor: theme.colors.separatorBack
  },
	separator: {
		height: 10,
		backgroundColor: theme.colors.separatorBack,
	},
  SearchMenuWrapper: {
    display: 'flex',
    flexGrow: 0,
    justifyContent: 'center',
    backgroundColor: theme.colors.separatorBack,
    margin: 10,
  },
  searchMenuTextInputWrapper: {
    display: 'flex',
    flexDirection: 'row',

    backgroundColor: theme.colors.cardBack,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderRadius: 2,
  },
  searchMenuTextInput: {
    width: '92%'
  },
  SearchMenuButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  clear: {
    alignSelf: 'center',
    padding: 5,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, onEndReach, setFilter, setSort}) => {
  const history = useHistory();
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
    : [];
  
	return (
    <View style={styles.mainBack}>
		  <FlatList
        ListHeaderComponent={<SearchMenu setFilter={setFilter} setSort={setSort} />}
		  	style={{ height: '90%' }}
		  	data={repositoryNodes}
		  	ItemSeparatorComponent={ItemSeparator}
		  	renderItem={(item) => <RepositoryListItem item={item.item} history={history} />}
		  	keyExtractor={repo => repo.id}
				onEndReached={() => onEndReach()}
				onEndReachedThreshold={0.2}
		  />
    </View>
	);
};

const SearchMenu = ({ setFilter, setSort }) => {
  const [value, setValue] = useState('CREATED_AT:DESC');
  const [text, setText] = useState('');
  const [debounced] = useDebounce(text, 500);

  useEffect(() => {
    setFilter(debounced)
  }, [debounced])

  return (
    <View style={styles.SearchMenuWrapper}>
      <View style={styles.searchMenuTextInputWrapper}>
        <TextInput 
          value={text}
          placeholder='Filter...'
          style={styles.searchMenuTextInput}
          onChangeText={setText}
        />
        <TouchableOpacity 
          style={styles.clear}
          onPress={() => setText('')}
        >
          <FontAwesomeIcon icon={faTimes} />
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => {
          setSort(itemValue);
          setValue(itemValue);
        }
        }
        mode={'dialog'}
        prompt='Select an item...'
      >
        <Picker.Item label='Latest repositories' value={'CREATED_AT:DESC'} />
        <Picker.Item label='Highest rated repositories' value={'RATING_AVERAGE:DESC'} />
        <Picker.Item label='Lowest rated repositories' value={'RATING_AVERAGE:ASC'} />
      </Picker>
    </View>
  )
}

const RepositoryList= () => {
  const [sort, setSort] = useState('CREATED_AT:DESC');
  const [filter, setFilter] = useState('');
  
  const sortMethod = sort.split(':')
	const { repositories, fetchMore } = useRepositories({
    orderBy: sortMethod[0],
    orderDirection: sortMethod[1],
    searchKeyword: filter,
		first: 5,
  });

	const onEndReach = () => {
		console.log('You have reached the end of the list');
		fetchMore();
	}

	return <RepositoryListContainer repositories={repositories} onEndReach={onEndReach} setFilter={setFilter} setSort={setSort} />;
};

export default RepositoryList;