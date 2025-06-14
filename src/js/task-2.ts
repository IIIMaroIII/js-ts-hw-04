interface Day {
  day: string
  calories: number
}

type Days = Array<Day>
type CalcAverageCaloriesFn = (days: Days) => number

const calcAverageCalories: CalcAverageCaloriesFn = function (days) {
  let totalCalories: number = 0

  if (days.length === 0) {
    return 0
  }

  for (const day of days) {
    if (day?.calories) {
      totalCalories += day.calories
    }
  }
  return totalCalories / days.length
}

export default calcAverageCalories

/**
 * console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180
 */
