import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import StarIcon from '../../assets/icons/star.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import AboutIcon from '../../assets/icons/about.svg';
import HeartIcon from '../../assets/icons/heart.svg';

interface DoctorCardProps {
  image: any;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialty,
  rating,
  reviews,
}) => {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={image} style={styles.profileImg} />

      {/* Name + Title Box */}
      <View style={styles.informationContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.specialty}>{specialty}</Text>
        </View>

        {/* Bottom Icons Row */}
        <View style={styles.bottomRow}>
          <View style={styles.reviews}>
            {/* Rating */}
            <View style={styles.ratingBox}>
              <StarIcon
                width={12}
                height={12}
                // fill="#2260FF"
                stroke="#2260FF"
              />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>

            {/* Reviews */}
            <View style={styles.ratingBox}>
              <CommentIcon
                width={12}
                height={12}
                // fill="#2260FF"
                stroke="#2260FF"
              />
              <Text style={styles.ratingText}>{reviews}</Text>
            </View>
          </View>

          {/* Help Icon */}
          <View style={styles.favorite}>
            <TouchableOpacity style={styles.circleButton}>
              <AboutIcon
                width={12}
                height={12}
                // fill="#2260FF"
                stroke="#2260FF"
              />
            </TouchableOpacity>

            {/* Favorite Icon */}
            <TouchableOpacity style={styles.circleButton}>
              <HeartIcon
                width={12}
                height={12}
                // fill="#2260FF"
                stroke="#2260FF"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CAD6FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 17,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },

  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },

  informationContainer: {
    flex: 1,
  },

  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2260FF',
  },

  specialty: {
    fontSize: 12,
    fontWeight: '300',
    color: '#000',
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    justifyContent: 'space-between',
  },

  reviews: {
    flexDirection: 'row',
    columnGap: 4,
  },

  ratingBox: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignItems: 'center',
  },

  ratingText: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '300',
    color: '#2260FF',
  },

  favorite: {
    flexDirection: 'row',
    columnGap: 4,
  },

  circleButton: {
    backgroundColor: '#FFFFFF',
    width: 22,
    height: 22,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
