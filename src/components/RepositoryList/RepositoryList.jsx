import React, { useState, useRef } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from 'react-native';
import theme from '../../theme';
import RepositoryListItem from './RepositoryListItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Text from '../Text';

import { useHistory } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';
import { setIn } from 'formik';

const styles = StyleSheet.create({
  mainBack: {
    backgroundColor: theme.colors.separatorBack
  },
	separator: {
		height: 10,
		backgroundColor: theme.colors.separatorBack,
	},
  sortMenuWrapper: {
    display: 'flex',
    flexGrow: 0,
    justifyContent: 'center',
    backgroundColor: theme.colors.cardBack,
    margin: 10,
  },
  sortMenuButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, history, SortMenu}) => {
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
    : [];
  
	return (
    <View style={styles.mainBack}>
		  <FlatList
        ListHeaderComponent={SortMenu}
		  	style={{ height: '85%' }}
		  	data={repositoryNodes}
		  	ItemSeparatorComponent={ItemSeparator}
		  	renderItem={(item) => <RepositoryListItem item={item.item} history={history} />}
		  	keyExtractor={repo => repo.id}
		  	ListFooterComponent={<View style={{height: 10}}/>}
		  />
    </View>
	);
};

const RepositoryList= () => {
  const [sort, setSort] = useState('CREATED_AT:DESC');

  const sortMethod = sort.split(':')
	const { repositories } = useRepositories({
    orderBy: sortMethod[0],
    orderDirection: sortMethod[1]
  });
	const history = useHistory();

  const SortMenu = () => {
    return (
      <View style={styles.sortMenuWrapper}>
        <Picker
          selectedValue={sort}
          onValueChange={(itemValue, itemIndex) =>
            setSort(itemValue)
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

	return <RepositoryListContainer repositories={repositories} history={history} SortMenu={SortMenu} />;
};

export default RepositoryList;