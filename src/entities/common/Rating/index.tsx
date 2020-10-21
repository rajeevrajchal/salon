import React from 'react';
import StarRating from 'react-native-star-rating';
import {View} from "react-native";
import layout from "../../../assets/styles/layout";

interface RatingProps {
    rateNumber: number
    iconSize: number
    isRating: boolean
    setRateNumber: (rating: number) => void
}

const Rating: React.FC<RatingProps> = (props) => {
    const {
        rateNumber,
        iconSize,
        isRating,
        setRateNumber
    } = props
    const onStarRatingPress = (rating: any) => {
        isRating && setRateNumber(rating)
    }
    return (
        <View>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={rateNumber}
                fullStarColor={'red'}
                starSize={iconSize}
                selectedStar={(rating) => onStarRatingPress(rating)}
            />
        </View>
    );
};

export default Rating;
