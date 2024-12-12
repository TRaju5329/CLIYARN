import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TimelineCalendar } from '@howljs/calendar-kit';

const Canlendarkit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TimelineCalendar viewMode="week" />
    </SafeAreaView>
  );
};

export default Canlendarkit;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
});