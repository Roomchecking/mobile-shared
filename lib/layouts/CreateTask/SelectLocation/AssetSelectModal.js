import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Dimensions,
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import I18n from 'react-native-i18n';
import Button from 'rc-mobile-base/lib/components/Button';
import { filter, find, includes } from 'lodash/collection';
import { get } from 'lodash/object';
import Icon from 'react-native-vector-icons/Feather';

// import ModalHeader from 'rc-mobile-base/lib/components/ModalHeader';
import SafeAreaHeader from 'rc-mobile-base/lib/components/SafeAreaHeader';
import ModalHeader from 'rc-mobile-base/lib/layouts/CreateTask/SelectLocationModal/ModalHeader';

import {
  flx1,
  splashBg,
  blue500
} from 'rc-mobile-base/lib/styles';

import AssetSelectRow from './AssetSelectRow';

const buttonBorderColor = '#cfd4de';

class AssetSelectModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    }
  }

  _handleSearch(t) {
    const cleanQuery = t && t.toLowerCase() || null;

    if (!cleanQuery) {
      this.setState({ searchQuery: '', });
    } else {
      this.setState({ searchQuery: t, });
    }
  }

  render() {
    const {
      isVisible,
      toggleModal,
      handleSelectAsset,
      selectedAsset,
      assets,
      isDisableLiteTasks,
      onCancelSelection,
      onDoneSelection,
      customActions,
      selectedAction,
      handleSelectAction
    } = this.props;

    const { searchQuery } = this.state;
    const cleanQuery = searchQuery.toLowerCase();
    const selectedAssetId = get(selectedAsset, 'id', null);

    const filteredAssets = filter(assets, o => includes(get(o, 'name', '').toLowerCase(), cleanQuery));
    const isExisting = !!find(assets, asset => cleanQuery === asset.name.toLowerCase());

    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={isVisible}
        onRequestClose={() => null}
      >
          {Platform.OS === 'ios' ? <SafeAreaHeader /> : null}
          <SafeAreaView style={styles.container}>
          <ModalHeader value={I18n.t('maintenance.createtask.assetselectmodal.select-asset')} onLeftAction={onCancelSelection} onRightAction={toggleModal} />
            {/* <View>
              <TextInput
                style={styles.textField}
                onChangeText={(t) => { this._handleSearch(t) }}
                value={searchQuery}
                multiline={false}
                placeholder={I18n.t('maintenance.createtask.assetselectmodal.search-assets')} />
            </View> */}
        <View style={[flx1 , {backgroundColor:"#fff"}]}>
            <View style={styles.searchSection}>
              <View style={styles.searchIconContainer}>
                <Icon
                  name='search'
                  size={30}
                  color={splashBg.color}
                />
              </View>
              <TextInput
                style={styles.searchFieldContainer}
                onChangeText={(t) => { this._handleSearch(t) }}
                value={searchQuery}
                multiline={false}
                placeholder={I18n.t('maintenance.createtask.assetselectmodal.search-assets')} />
            </View>

            <View style={[flx1]}>
              {/* <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData, sId, rId) => <AssetSelectRow asset={rowData} onPress={handleSelectAsset} index={rId} isSelected={rowData._id === selectedAssetId} />}
              enableEmptySections={true}
              renderFooter={() => isExisting ? null : <AssetSelectRow isCreate={true} searchQuery={searchQuery} onPress={handleSelectAsset} index={0} />}
            /> */}
              <FlatList
                data={filteredAssets}
                keyExtractor={(item) => `${item.id}:${item.name}`}
                renderItem={({ item, index }) => <AssetSelectRow asset={item} selectedAction={selectedAction} customActions={customActions} handleSelectAction={handleSelectAction} onPress={handleSelectAsset} index={index} isSelected={item.id === selectedAssetId} />}
                // ListFooterComponent={() => isExisting ? null : !isDisableLiteTasks && !!searchQuery && searchQuery.length ? <AssetSelectRow isCreate={true} searchQuery={searchQuery} onPress={handleSelectAsset} index={0} /> : null}
              />
            </View>


            {/* <View style={styles.btnContainer}>
            <Button style={{ backgroundColor: '#81BC3F', height: 50, borderColor: '#81BC3F' }} onPress={toggleModal}>
              <Text>{I18n.t('base.ubiquitous.close')}</Text>
            </Button>
          </View> */}
        </View>

          </SafeAreaView>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...flx1,
    // ...blue500.bg
  },
  fieldLabel: {
    fontWeight: '600',
    color: '#4A4A4A',
    fontSize: 14,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20
  },
  textField: {
    height: 40,
    // flex: 1,
    width: 'auto',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 2,
    // paddingLeft: 10,
    // paddingRight: 12,
    // paddingTop: 5,
    // paddingBottom: 5,
    fontSize: 14,
    // margin: 20
  },
  listView: {
    flex: 1
  },
  btnContainer: {
    // height: 100
  },

  searchSection: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 20,
    marginHorizontal: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: buttonBorderColor
  },
  searchIconContainer: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  searchFieldContainer: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
});

AssetSelectModal.defaultProps = {
  isVisible: false
};

export default AssetSelectModal;