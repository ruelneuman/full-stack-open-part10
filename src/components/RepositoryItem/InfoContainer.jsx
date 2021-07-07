import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import Subheading from '../Subheading';
import theme from '../../theme';

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    margin: theme.spacing.medium,
  },
  avatarContainer: {
    marginRight: theme.spacing.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.medium,
  },
  infoText: {
    flex: 1,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    padding: 4,
    borderRadius: 4,
    marginTop: 4,
  },
});

const InfoContainer = ({ fullName, description, language, avatarUrl }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatarUrl
          }}
        />
      </View>
      <View style={styles.infoText}>
        <Subheading>{fullName}</Subheading>
        <Text color="textSecondary">{description}</Text>
        <Text color="textLight" style={styles.language}>{language}</Text>
      </View>
    </View>
  );
};

export default InfoContainer;