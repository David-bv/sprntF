import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Estadisticas from "../components/Estadisticas";
import QuestionHtml from "../components/questions/QuestionHtml";
import Perfil from "../components/Perfil";
import QuestionCss from "../components/questions/QuestionCss";
import QuestionJs from "../components/questions/QuestionJs";
import QuestionUx from "../components/questions/QuestionUx";
import QuestionFigma from "../components/questions/QuestionFigma";
import Login from "../components/Login";
import SignIn from "../components/SignIn";
import AdminApp from "../components/AdminApp";
import LoginAdmin from "../components/LoginAdmin";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login-admin' element={<LoginAdmin/>}/>
        <Route path='/admin' element={<AdminApp/>}/>
        <Route path='/sigin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/statistics' element={<Estadisticas/>}/>
        <Route path='/profile' element={<Perfil/>}/>
        <Route path='/question/html' element={<QuestionHtml/>}/>  
        <Route path='/question/css' element={<QuestionCss/>}/>      
        <Route path='/question/js' element={<QuestionJs/>}/>  
        <Route path='/question/figma' element={<QuestionFigma/>}/> 
        <Route path='/question/ux' element={<QuestionUx/>}/> 
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes