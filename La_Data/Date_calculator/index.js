//today date on the start input
const today = new Date().toISOString().split("T")[0];
start.value = today;
start.min = today;

//tommorrow date on the end input
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const tomorrowConvert = tomorrow.toISOString().split("T")[0];
end.value = tomorrowConvert;
end.min = tomorrowConvert;

//event went start input change
start.addEventListener("change", (e) => {
  const day = new Date(e.target.value);

  if (end.value <= start.value) {
    day.setDate(day.getDate() + 1);
    const dayConvert = day.toISOString().split("T")[0];
    end.value = dayConvert;
    end.min = dayConvert;
  }
  console.log(day);
});
