SELECT * FROM currentExercises 
WHERE userid = $1 
ORDER BY dates DESC;
