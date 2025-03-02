import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ActivityTask } from "../../entities/ActivityTask";
import { Day } from "../../entities/Day";
import { LineChart } from "react-native-gifted-charts";
import { useEffect } from "react";
import colors from "../../constants/colors";

interface CompletedDiagramChartProps {
  data: any[];
}

const taskData = [
  {
    id: 52,
    name: "task2",
    startTime: null,
    endTime: null,
    day: "MONDAY",
    whenCompleted: null,
    activityId: 1,
    completed: true,
  },
  {
    id: 54,
    name: "task4",
    startTime: null,
    endTime: null,
    day: "FRIDAY",
    whenCompleted: null,
    activityId: 1,
    completed: true,
  },
  {
    id: 54,
    name: "task4",
    startTime: null,
    endTime: null,
    day: "FRIDAY",
    whenCompleted: null,
    activityId: 1,
    completed: true,
  },
  {
    id: 54,
    name: "task4",
    startTime: null,
    endTime: null,
    day: "FRIDAY",
    whenCompleted: null,
    activityId: 1,
    completed: true,
  },
];

const mapStringToDayEnum = (day: string): Day => {
  switch (day) {
    case "MONDAY":
      return Day.MONDAY;
    case "TUESDAY":
      return Day.TUESDAY;
    case "WEDNESDAY":
      return Day.WEDNESDAY;
    case "THURSDAY":
      return Day.THURSDAY;
    case "FRIDAY":
      return Day.FRIDAY;
    case "SATURDAY":
      return Day.SATURDAY;
    case "SUNDAY":
      return Day.SUNDAY;
    default:
      throw new Error(`Unknown day: ${day}`);
  }
};

const correctedTaskData = taskData.map((task) => ({
  ...task,
  day: mapStringToDayEnum(task.day),
}));

const countTasksPerDay = (data: ActivityTask[]) => {
  const count: { [key in Day]: number } = {
    [Day.MONDAY]: 0,
    [Day.TUESDAY]: 0,
    [Day.WEDNESDAY]: 0,
    [Day.THURSDAY]: 0,
    [Day.FRIDAY]: 0,
    [Day.SATURDAY]: 0,
    [Day.SUNDAY]: 0,
  };

  data.forEach((task) => {
    if (task.completed) {
      count[task.day] = count[task.day] ? count[task.day] + 1 : 1;
    }
  });

  return count;
};

const taskCount = countTasksPerDay(correctedTaskData);

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const chartData = () => {
  const formattedData = Object.values(taskCount).map((value, index) => ({
    value: value,
    label: labels[index],
  }));
  return formattedData;
};

const getMaxValue = (data: { [key in Day]: number }) => {
  return Math.max(...Object.values(data)); // Get the maximum value from the task counts
};

const CompletedDiagramChart: React.FC = () => {
  const data = chartData();
  const screenWidth = Dimensions.get("window").width;
  const maxValue = getMaxValue(taskCount);

  useEffect(() => {}, [taskData, chartData]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your <Text style={{ color: colors.primary }}>Master</Text> Progress
      </Text>
      <LineChart
        data={data}
        isAnimated={true}
        initialSpacing={9}
        showVerticalLines={false}
        width={screenWidth * 0.68}
        stepValue={1}
        yAxisColor="transparent"
        xAxisColor="transparent"
        color1={colors.primary}
        dataPointsColor1={colors.secondaryFont}
        yAxisTextStyle={{
          color: colors.primary,
          fontSize: 12,
          width: "max-content",
        }}
        maxValue={maxValue + 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "Raleway-Bold",
    marginBottom: 10,
    marginTop: 1,
  },
});

export default CompletedDiagramChart;
