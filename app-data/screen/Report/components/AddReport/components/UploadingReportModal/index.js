import React from 'react';
import {
  ActivityIndicator,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';

const UploadingReportModal = ({ visible }) => (
  <Modal
    animationIn="slideInUp"
    animationOut="slideOutDown"
    isVisible={visible}
    style={styles.modalContainer}
  >
    <View style={styles.modal}>
      <ActivityIndicator style={styles.activityIndicator} />
      <Text style={styles.modalText}>Nahrávam</Text>
    </View>
  </Modal>
);

UploadingReportModal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default UploadingReportModal;
