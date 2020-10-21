import React from 'react';
import { Image, Text, View } from 'react-native';
import layout from '../../../../../assets/styles/layout';
import categoryItem from './categoryItem';
import styles from './styles';

const Category: React.FC = () => {
  return (
    <View style={[layout.displayRow, layout.displayBetween]}>
      {categoryItem.map((item, index) => (
        <View style={[layout.itemCenter]} key={index}>
          <View style={[styles.categoryImage, layout.boxShadow]}>
            <Image style={[layout.img]} resizeMode={'contain'} source={item.image} />
          </View>
          <Text style={styles.categoryLabel}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Category;
