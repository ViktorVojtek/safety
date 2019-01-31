import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';

const ModalComponent = ({ close, text, visible }) => (
  <Modal
    animationIn="slideInUp"
    animationOut="slideOutDown"
    isVisible={visible}
    style={styles.modalContainer}
  >
    <View style={styles.modal}>
      <Text style={styles.modalText}>Chyba!</Text>
      <Text style={styles.modalText}>{text}</Text>
      <TouchableOpacity style={styles.buttonClose} onPress={close}>
        <Text style={styles.textWhite}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

ModalComponent.defaultProps = {
  close: undefined,
  text: '',
  visible: false,
};

ModalComponent.propTypes = {
  close: PropTypes.func,
  text: PropTypes.string,
  visible: PropTypes.bool,
};

export default ModalComponent;