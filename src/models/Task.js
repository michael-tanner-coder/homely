class Task {
  constructor(
    name = "MyTask",
    finished = false,
    date = { day: "", time: "" },
    reminder = { day: "", time: "" },
    supplies = [],
    uid = ""
  ) {
    this.name = name;
    this.finished = finished;
    this.date = date;
    this.reminder = reminder;
    this.supplies = supplies;
    this.uid = uid;
  }
}

export default Task;
