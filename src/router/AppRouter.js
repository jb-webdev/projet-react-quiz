/**
 * @author jean-jacques BOERO
 * @file AppRouter router gere les routes de l'application
 */
import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../view/Home'
import Quiz from '../view/Quiz'


export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/*" element={<Home/>} />
      </Routes>
    </>
  )
}
