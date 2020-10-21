import React, { Dispatch } from 'react';
import { Modal, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/interface/storeInterface';
import { closeModal } from './service/appModalAction';
import layout from '../../../assets/styles/layout';
import AppIconButton from '../AppIconButton';
import typography from '../../../assets/styles/typography';
import appModalReducer from './service/appModalReducer';

interface AppModalInterface {
  children: React.ReactNode;
}

const AppModal: React.FC<AppModalInterface> = (props) => {
  const { children } = props;
  const isOpenModal: boolean = useSelector((state: RootState) => state.appModalReducer.isOpenModal);

  const dispatch = useDispatch<Dispatch<any>>();
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      presentationStyle={'pageSheet'}
      visible={isOpenModal}>
      <SafeAreaView style={[layout.flexOne]}>
        <View
          style={[
            layout.containerPadding,
            layout.displayRow,
            layout.itemCenter,
            layout.displayBetween,
          ]}>
          <AppIconButton iconName={'close'} onPressAction={() => dispatch(closeModal())} />
          <Text style={typography.title}>Modal Screen </Text>
        </View>
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
};

export default AppModal;
