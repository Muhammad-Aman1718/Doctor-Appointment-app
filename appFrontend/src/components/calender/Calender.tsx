import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  addDays,
  subDays,
  addMonths,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

const PRIMARY = '#2260FF';

const Calendar = () => {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [showMonth, setShowMonth] = useState(false); // Month dropdown toggle

  // Full month days
  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Week view — get current week's days
  const weekStart = startOfWeek(selectedDay, { weekStartsOn: 0 });
  const weekEnd = endOfWeek(selectedDay, { weekStartsOn: 0 });

  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <View style={styles.container}>
      {/* MONTH HEADER (click to show full month) */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setShowMonth(!showMonth)}
      >
        <Icon name="calendar-month" size={26} color={PRIMARY} />
        <Text style={styles.headerTitle}>
          {format(currentMonth, 'MMMM yyyy')}
        </Text>
        <Icon
          name={showMonth ? 'expand-less' : 'expand-more'}
          size={26}
          color={PRIMARY}
        />
      </TouchableOpacity>

      {/* SHOW FULL MONTH GRID ONLY WHEN OPEN */}
      {showMonth && (
        <View style={styles.fullMonthGrid}>
          {monthDays.map(day => {
            const isSelected = isSameDay(day, selectedDay);
            const isToday = isSameDay(day, today);

            return (
              <TouchableOpacity
                key={day.getTime()}
                onPress={() => {
                  setSelectedDay(day);
                  setShowMonth(false);
                }}
                style={[
                  styles.monthBox,
                  isSelected && styles.selectedBox,
                  isToday && styles.todayBox,
                ]}
              >
                <Text
                  style={[
                    styles.monthNumber,
                    isSelected
                      ? styles.selectedText
                      : isToday
                      ? styles.todayText
                      : styles.againtodayText,
                    // isSelected && styles.selectedText,
                    // isToday && styles.todayText,
                  ]}
                >
                  {format(day, 'd')}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      {/* WEEK VIEW – ALWAYS VISIBLE */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weekContainer}
      >
        {weekDays.map(day => {
          const isSelected = isSameDay(day, selectedDay);
          const isToday = isSameDay(day, today);

          return (
            <TouchableOpacity
              key={day.getTime()}
              style={[styles.weekItem, isSelected && styles.selectedWeek]}
              onPress={() => setSelectedDay(day)}
            >
              <Text
                style={[
                  styles.weekDate,
                  isSelected
                    ? styles.weekDateSelected
                    : isToday
                    ? styles.todayText
                    : styles.againtodayText,
                  // isSelected && styles.weekDateSelected,
                  // isToday && styles.todayText,
                ]}
              >
                {format(day, 'd')}
              </Text>
              <Text
                style={[styles.weekDay, isSelected && styles.weekDaySelected]}
              >
                {format(day, 'EEE')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* SELECTED DATE TITLE */}
      <Text style={styles.selectedTitle}>
        {format(selectedDay, 'd MMMM yyyy')}
      </Text>

      {/* APPOINTMENT BOX */}
      <View style={styles.card}>
        <Text style={styles.time}>10:00 AM</Text>
        <Text style={styles.docName}>Dr. Olivia Turner, M.D.</Text>
        <Text style={styles.desc}>
          Treatment and prevention of skin and photodermatitis.
        </Text>

        <View style={styles.iconRow}>
          <Icon name="check-circle" size={22} color={PRIMARY} />
          <Icon
            name="close"
            size={22}
            color={PRIMARY}
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAD6FF',
    paddingVertical: 20,
    marginVertical: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 20,
    elevation: 3,
    gap: 6,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: PRIMARY,
  },

  /* FULL MONTH GRID */
  fullMonthGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    marginTop: 10,
  },

  monthBox: {
    width: '14.28%',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },

  monthNumber: {
    fontSize: 16,
    color: '#333',
  },

  selectedBox: {
    backgroundColor: PRIMARY,
    borderRadius: 50,
  },

  selectedText: {
    color: 'white',
    fontWeight: 'bold',
  },
  againtodayText: {},

  todayBox: {
    borderWidth: 1.5,
    borderColor: PRIMARY,
    borderRadius: 50,
  },

  todayText: {
    color: PRIMARY,
    fontWeight: 'bold',
  },

  /* WEEK STRIP */
  weekContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },

  weekItem: {
    backgroundColor: 'white',
    width: 55,
    height: 65,
    marginRight: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  weekDate: {
    fontSize: 20,
    color: '#333',
    fontWeight: '600',
  },

  weekDay: {
    fontSize: 12,
    color: '#777',
    marginTop: -3,
  },

  selectedWeek: {
    backgroundColor: PRIMARY,
  },

  weekDateSelected: {
    color: 'white',
  },
  weekDaySelected: {
    color: 'white',
  },

  selectedTitle: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },

  /* CARD */
  card: {
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },

  time: {
    color: PRIMARY,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },

  docName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: PRIMARY,
  },

  desc: {
    marginTop: 5,
    color: '#555',
  },

  iconRow: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
