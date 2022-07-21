import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("")
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      )

      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExerciseData()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )

      const searchedExercises = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
        );
      });
      setSearch("")
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" padding="20px">
      <Typography fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }} mb="50px" textAlign="center">
        Awesome Exercises <br /> You Should Know 🏋️
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              borderRadius: "4px",
              border: "none"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises ..."
          type="text"
        />
        <Button className="search-btn "
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0"
          }} onClick={handleSearch}>Search</Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
        }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack >
  )
}

export default SearchExercises