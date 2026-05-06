import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import RNFS from 'react-native-fs';

const SAMPLE_IMAGE = 'sample.png';

const App = () => {
  const [status, setStatus] = useState('');

  const copyImageToTemp = async () => {
    try {
      const sourcePath = `${RNFS.MainBundlePath}/assets/${SAMPLE_IMAGE}`;
      const tempDir = RNFS.TemporaryDirectoryPath; // Maps to %temp% on Windows
      const destPath = `${tempDir}/${SAMPLE_IMAGE}`;

      const exists = await RNFS.exists(sourcePath);
      if (!exists) {
        setStatus(`Source image not found: ${sourcePath}`);
        return;
      }

      await RNFS.copyFile(sourcePath, destPath);
      setStatus(`Image copied successfully to:\n${destPath}`);
    } catch (error) {
      setStatus(`Error copying image: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Copier</Text>
      <Text style={styles.description}>
        Copies sample.png from the app assets directory to the Windows %temp% folder.
      </Text>
      <Image
        source={require('./assets/sample.png')}
        style={styles.preview}
        resizeMode="contain"
      />
      <Button title="Copy Image to %temp%" onPress={copyImageToTemp} />
      {status ? <Text style={styles.status}>{status}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  preview: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  status: {
    marginTop: 20,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default App;
