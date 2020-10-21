import React from 'react';
import { Image, Text, View } from 'react-native';
import layout from '../../../../../assets/styles/layout';
import typography from '../../../../../assets/styles/typography';
import { padding } from '../../../../../assets/styles/vars';
import Rating from '../../../../common/Rating';
import { FacilityInterface } from '../../interface/HomeInterface';

interface FacilityProps {
  facility: FacilityInterface;
}
const Facility: React.FC<FacilityProps> = (props) => {
  const { facility } = props;
  return (
    <View
      style={[
        layout.card,
        layout.boxShadow,
        layout.displayRow,
        layout.displayBetween,
        layout.itemCenter,
      ]}>
      <View>
        <Text style={[typography.title]}>{facility.name} </Text>
        <Text style={[typography.subTitle, { paddingVertical: padding.sm }]}>
          {facility.time} mins{' '}
        </Text>
        <Rating
          rateNumber={facility.rating}
          setRateNumber={() => console.log()}
          iconSize={15}
          isRating={false}
        />
        <Text style={[typography.title, { paddingVertical: padding.sm }]}>$ {facility.price} </Text>
      </View>
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: padding.md,
        }}>
        <Image
          style={layout.roundedImage}
          resizeMode={'cover'}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/11/29/03/36/beautiful-1867093__480.jpg',
          }}
        />
      </View>
    </View>
  );
};

export default Facility;
