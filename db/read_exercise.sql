SELECT * FROM currentExercises WHERE userid = $1
and dates = (select max(dates)
from currentExercises
where userid = $1);
