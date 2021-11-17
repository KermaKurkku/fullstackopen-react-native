import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { Menu, Provider, Button } from 'react-native-paper';
import theme from '../../theme';
import RepositoryListItem from './RepositoryListItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import Text from '../Text';

import { useHistory } from 'react-router-native';
import useRepositories from '../../hooks/useRepositories';

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
    justifyContent: 'center',
    backgroundColor: theme.colors.cardBack,
  },
  sortMenuButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, history }) => {
  const [sort, setSort] = useState('CREATED_AT');
	const repositoryNodes = repositories
		? repositories.edges.map(edge => edge.node)
    : [];
  
  const SortMenu = () => {
    const [visible, setVisible] = useState(false);
    const openMenu = () => {setVisible(true); console.log(visible) }
    const closeMenu = () => {setVisible(false); console.log(visible)}
    return (
      <Provider>
         <View>
          <Menu 
              visible={visible}
              onDismiss={closeMenu}
              contentStyle={{
                backgroundColor: 'red'
              }}
              anchor={
                <>
                  <Pressable onPress={openMenu} style={styles.sortMenuButtonWrapper}>
                    <Text fontSize='subheading'>Latest repositories</Text>
                    <FontAwesomeIcon icon={faCaretDown} style={styles.icon} /> 
                  </Pressable>
                </>
              }
            >
              <Menu.Item style={{backgroundColor: 'green'}}
              onPress={() => console.log('test1')} title='test1' />
              <Menu.Item onPress={() => console.log('Test2')} title='test2' />

            </Menu>
         </View>
      </Provider>
    )
  }
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
	const { repositories } = useRepositories();
	const history = useHistory();

	return <RepositoryListContainer repositories={repositories} history={history} />;
};

export default RepositoryList;